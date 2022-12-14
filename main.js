import {graphProperties, graphStyles} from "./graph-styles.js";
import DataManager from "./data-manager.js";

class CourseVisualizer {
    
    constructor () {
        this.cy;
        this.attachEventHandlers();
        this.styleVariables = graphStyles.variables;
    }

    attachEventHandlers () {
        document.querySelector('select').addEventListener('change', this.filterBySpecialization.bind(this));
    }

    async draw() {
        this.dataManager = new DataManager();
        const graphData = await this.dataManager.fetchDataFromSheets();
        document.querySelector('#cy').innerHTML = "";
        this.cy = window.cy = cytoscape({
            container: document.getElementById('cy'),
            layout: {
                name: 'preset'
            },
            style: graphStyles,
            elements: graphData
        });
    
        cy.bind('click', 'node', this.highlightDependencyPath.bind(this));
        cy.bind('click', this.clearIfNotNode.bind(this));
    }

    filterBySpecialization() {
        this.clearStyling();
        this.clearDetailPanel();
        const key = document.querySelector('select').value;
        cy.nodes().forEach(node => {
            if (node.data()[key]) {
                // if the filter matches, set the featured color
                // to the color associated with the match.
                graphProperties['featured'] = graphProperties[key];
                node.addClass('featured');
            }
        });
    }

    prereqsToHTML(nodeMap) {
        // keeps the prerequisites organized based 
        // on distance from source (key is the distance)
        // in BFS traversal:
        let nodes = [];
        for (const key in nodeMap) {
            nodeMap[key].sort();
            nodeMap[key].reverse();
            nodes = nodes.concat(nodeMap[key]);
        }
        let html = `<h3>Prerequisites</h3>`;
        if (nodes.length > 0) {
            html += `<ul><li>${nodes.join("</li><li>")}</li></ul>`;
        } else {
            html += `<p>None</p>`;
        }
        return html;
    }

    areasToHTML(data) {
        if (data.areas.length > 0) {
            return `
                <h3>Areas</h3>
                <span>${data.areas.join('</span><span>')}</span>
            `;
        }
        return '';
    }

    clearDetailPanel () {
        document.querySelector('.course-info').innerHTML = `
            <h2>Course Explorer</h2>
            <p>Click a class to learn more about it</p>
        `;
    }

    displayCourseInfo (node, dependencies) {
        const data = node.data();
        document.querySelector('.course-info').innerHTML = `
            <div class="course-details">
                <h2>${data.id.replace("CSCI", "CSCI ")}: ${data.title}</h2>
                <p>${data.description ? data.description : 'Some description of the course...'}</p>
                <p><strong>Credit Hours:</strong> ${data.credit_hours}</p>
                ${this.renderDegreeClassifications(node)}
                <p>${this.prereqsToHTML(dependencies)}</p>
                ${this.areasToHTML(data)}
            </div>
        `;
        setTimeout(function () {
            document.querySelector('.course-details').classList.add('visible');
        }, 100);
    }

    renderDegreeClassifications (node) {
        const data = node.data();
        const parent = node.parent();
        const parentData = parent.data();
        const grandparent = node.parent().parent();
        const grandparentData = grandparent.data();
        const isSystemsRequirement = data.systems;
        const isInfoRequirement = data.info;
        const isMinorRequirement = data.minor;
        const isSystemsCategory = (
            (parentData !== undefined && parentData.systems) || 
            (grandparentData !== undefined && grandparentData.systems)
        );
        const isInfoCategory = (
            (parentData !== undefined && parentData.info) || 
            (grandparentData !== undefined && grandparentData.info)
        );
        const isMinorCategory = (
            (parentData !== undefined && parentData.minor) || 
            (grandparentData !== undefined && grandparentData.minor)
        );
        
        let html = `
            ${isSystemsRequirement || isInfoRequirement || isMinorRequirement ? `<h3>Required For</h3>` : ''}
            ${isSystemsRequirement ? '<span class="systems">Computer Systems</span>' : ''}
            ${isInfoRequirement ? '<span class="info">Information Systems </span>' : ''}
            ${isMinorRequirement ? '<span class="minor">CS Minor</span>' : ''}
        `;
        if (isSystemsCategory || isInfoCategory || isMinorCategory) {
            html += `
                <h3>Meets a ${data.department} Requirement For</h3>
                ${isSystemsCategory ? '<span class="systems">Computer Systems</span>' : ''}
                ${isInfoCategory ? '<span class="info">Information Systems </span>' : ''}
                ${isMinorCategory ? '<span class="minor">CS Minor</span>' : ''}
                <p>Note: There may be multiple ways to meet this ${data.department} requirement.</p>
            `;
        }
        return html;
    }

    clearIfNotNode (evt) {
        if (evt.target === cy) {
            this.clearHighlights();
            this.clearDetailPanel();
        }
    }

    clearStyling () {
        console.log(cy);
        console.log("clearing styling");
        this.clearHighlights();
        cy.elements().removeClass("featured");
    }

    clearHighlights () {
        cy.elements().removeClass("highlighted");
        cy.elements().removeClass("selected");
    }

    highlightDependencyPath (evt) {
        const node = evt.target;
        if (!node.isChildless()) {
            return;
        }
        this.clearHighlights();
        node.addClass("highlighted");

        const dependencies = {};
        const dependencyList = [];
        cy.elements().dfs({
            roots: `#${evt.target.id()}`,
            visit: function(node, edge, u, i, depth) {
                if (edge) {
                    var courseID = node.data().id;
                    if (!dependencies[depth]) {
                        dependencies[depth] = [];
                    }
                    dependencies[depth].push(courseID);
                    dependencyList.push(node);
                    edge.addClass('selected');
                    node.addClass('selected');
                }
            },
            directed: true
        });

        // hack to ensure that all edges are highlighted (not just DFS path);
        dependencyList.forEach(node => { 
            const edges = node.connectedEdges();
            edges.forEach(edge => {
                const connectedNodes = edge.connectedNodes();
                connectedNodes.forEach(connectedNode => {
                    if (connectedNode != node && dependencyList.includes(connectedNode)) {
                        edge.addClass('selected');
                    }
                });
            });
        });

        this.displayCourseInfo(node, dependencies);
    }
}

const courseVisualizer = new CourseVisualizer();
courseVisualizer.draw();
