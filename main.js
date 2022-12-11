
// import elements from "./courses.js";
import DataManager from "./data-manager.js";

let nodeSize = 40;
let nodeSizeSelected = 45;
let selectedColor = '#3c91e6';

class CourseVisualizer {
    
    constructor () {
        this.cy;
        this.attachEventHandlers();
    }

    attachEventHandlers () {
        document.querySelector('select').addEventListener('change', this.draw.bind(this));
    }

    async draw() {

        this.dataManager = new DataManager();
        const graphData = await this.dataManager.fetchDataFromSheets();
        // console.log(graphData);
        const d1 = this.getCoursesForSpecialization(graphData);
        document.querySelector('#cy').innerHTML = "";
        this.cy = window.cy = cytoscape({
            container: document.getElementById('cy'),
            layout: {
                name: 'preset'
            },
            style: this.getStyles(),
            elements: d1
        });
    
        cy.bind('click', 'node', this.highlightDependencyPath.bind(this));
    }

    getStyles() {
        return [
            {
                selector: ':parent',
                style: {
                    'background-color': "#F0F0F0",
                    'border-width': 0.5,
                    "background-opacity": 0.1,
                    'text-valign': 'top',
                    'text-margin-y': '10px',
                    'font-size': '9px',
                    'color': '#555',
                    'font-weight': 'bold',
                    'label': el =>  {
                        return el.data().title;
                    }
                }
            },
            {
                selector: ':childless',
                style: {
                    'background-color': '#EEE',
                    'border-color': '#F0F0F0',
                    'color': '#444',
                    'font-weight': 'bold',
                    'text-halign': 'center',
                    'label': element => {
                        return element.data().id;
                    },
                    'width': nodeSize,
                    'height': nodeSize,
                    'text-valign': 'center',
                    'font-size': '7px',
                    'transition-property': 'border-width, border-color, width, height, border-opacity, background-color',
                    'transition-duration' : '0.5s',
                    'transition-timing-function': 'ease-in'
                }
            },
            {
                selector: 'edge',
                style: {
                    'width': 1,
                    'source-arrow-shape': 'triangle',
                    'line-color': '#DDD',
                    'source-arrow-color': '#DDD',
                    'curve-style': 'bezier',
                    'transition-property': 'width, line-color',
                    'transition-duration' : '0.5s',
                    'transition-timing-function': 'ease-in'
                }
            },
            {
                selector: 'node.highlighted',
                style: {
                    'border-color': selectedColor,
                    'background-color': selectedColor,
                    'color': 'white',
                    'border-width': 3,
                    'width': nodeSizeSelected,
                    'height': nodeSizeSelected,
                    'transition-property': 'border-width, border-color, width, height, border-opacity, background-color',
                    'transition-duration' : '0.5s',
                    'transition-timing-function': 'ease-in'
                }
            },
            {
                selector: 'edge.selected',
                style: {
                    'line-color': selectedColor,
                    'source-arrow-color': selectedColor,
                    'width': 3,
                    'transition-property': 'width, line-color',
                    'transition-duration' : '0.5s',
                    'transition-timing-function': 'ease-in'
                }
            },
            {
                selector: 'node.selected',
                style: {
                    'border-color': selectedColor,
                    'border-width': 3,
                    'width': nodeSizeSelected,
                    'height': nodeSizeSelected,
                    'transition-property': 'border-width, border-color, width, height, border-opacity, background-color',
                    'transition-duration' : '0.5s',
                    'transition-timing-function': 'ease-in'
                }
            }
        ];
    }

    resetStyles () {
        cy.edges().forEach(function (edge) {
            edge.style({
                'line-color': '#EEE',
                'source-arrow-color': '#DDD',
                'width': 0.5
            });
        });
        cy.nodes().forEach(this.resetNodeStyle.bind(this));
    }

    getCoursesForSpecialization(elements) {
        this.key = document.querySelector('select').value;
        console.log("KEY:", this.key)
        // console.log(elements, this.key);
        if (!this.key) {
            return elements;
        }
        const graphInfo = {
            nodes: [],
            edges: []
        };
        for (const node of elements.nodes) {
            if (node.data[this.key]) {
                graphInfo.nodes.push(node);
            }
        }
        for (const edge of elements.edges) {
            let hasTarget = false;
            let hasSource = false;
            for (const node of graphInfo.nodes) {
                if (node.data.id === edge.data.target) {
                    hasTarget = true;
                }
                if (node.data.id === edge.data.source) {
                    hasSource = true;
                }
            }
            if (hasTarget && hasSource) {
                graphInfo.edges.push(edge);
            }
        }
        return graphInfo;
    
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
        if (nodes.length > 0) {
            return `<ul><li>${nodes.join("</li><li>")}</li></ul>`;
        } else {
            return `<p>None</p>`;
        }
    }

    displayCourseInfo (data, dependencies) {
        document.querySelector('.course-info').innerHTML = `
            <div class="course-details">
                <h2>${data.id.replace("CSCI", "CSCI ")}: ${data.title}</h2>
                <p>${data.description ? data.description : 'Some description of the course...'}</p>
                ${data.systems || data.info || data.minor ? '<h3>Required For</h3>' : ''}
                ${data.systems ? '<span class="systems">Computer Systems</span>' : ''}
                ${data.info ? '<span class="info">Information Systems </span>' : ''}
                ${data.minor ? '<span class="minor">CS Minor</span>' : ''}
                <h3>Prerequisites</h3>
                <p>${this.prereqsToHTML(dependencies)}</p>
            </div>
        `;
        setTimeout(function () {
            document.querySelector('.course-details').classList.add('visible');
        }, 100);
    }

    highlightDependencyPath (evt) {
        const node = evt.target;
        cy.elements().removeClass("highlighted");
        cy.elements().removeClass("selected");
        node.addClass("highlighted");

        var dependencies = {};
        cy.elements().dfs({
            roots: `#${evt.target.id()}`,
            visit: function(node, edge, u, i, depth) {
                if (edge) {
                    var courseID = node.data().id.replace("CSCI", "CSCI ");
                    if (!dependencies[depth]) {
                        dependencies[depth] = [];
                    }
                    dependencies[depth].push(courseID);
                    edge.addClass('selected');
                    node.addClass('selected');
                }
            },
            directed: true
        });

        this.displayCourseInfo(node.data(), dependencies);
    }
}

const courseVisualizer = new CourseVisualizer();
courseVisualizer.draw();
