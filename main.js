import DataManager from "./data-manager.js";

let nodeSize = 40;
let nodeSizeSelected = 45;
let fontSizeSelected = '9px';
let selectedColor = '#3c91e6';
let systemsColor = '#413C58';
let infoColor = '#6a8e7f';
let minorColor = '#EFCB68';

class CourseVisualizer {
    
    constructor () {
        this.cy;
        this.attachEventHandlers();
    }

    attachEventHandlers () {
        document.querySelector('select').addEventListener('change', this.filterBySpecialization.bind(this));
    }

    async draw() {
        this.dataManager = new DataManager();
        const graphData = await this.dataManager.fetchDataFromSheets();
        // console.log(graphData);
        // const d1 = this.filterBySpecialization(graphData);
        document.querySelector('#cy').innerHTML = "";
        this.cy = window.cy = cytoscape({
            container: document.getElementById('cy'),
            layout: {
                name: 'preset'
            },
            style: this.getStyles(),
            elements: graphData
        });
    
        cy.bind('click', 'node', this.highlightDependencyPath.bind(this));
        cy.bind('click', this.clearIfNotNode.bind(this));
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
                selector: 'node.minor:childless',
                style: {
                    'border-color': minorColor,
                    'background-color': minorColor,
                    'color': 'white',
                    'font-size': fontSizeSelected,
                    'width': nodeSizeSelected,
                    'height': nodeSizeSelected,
                    'transition-property': 'border-width, border-color, width, height, font-size, background-color',
                    'transition-duration' : '0.5s',
                    'transition-timing-function': 'ease-in'
                }
            },
            {
                selector: 'node.systems:childless',
                style: {
                    'border-color': systemsColor,
                    'background-color': systemsColor,
                    'color': 'white',
                    'width': nodeSizeSelected,
                    'height': nodeSizeSelected,
                    'font-size': fontSizeSelected,
                    'transition-property': 'border-width, border-color, width, height, font-size, background-color',
                    'transition-duration' : '0.5s',
                    'transition-timing-function': 'ease-in'
                }
            },
            {
                selector: 'node.info:childless',
                style: {
                    'border-color': infoColor,
                    'background-color': infoColor,
                    'color': 'white',
                    'width': nodeSizeSelected,
                    'height': nodeSizeSelected,
                    'font-size': fontSizeSelected,
                    'transition-property': 'border-width, border-color, width, height, font-size, background-color',
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

    filterBySpecialization() {
        this.clearStyling();
        const key = document.querySelector('select').value;
        // console.log(key);
        cy.nodes().forEach(node => {
            // console.log(key, node.data()[key]);
            if (node.data()[key]) {
                node.addClass(key);
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
        if (nodes.length > 0) {
            return `<ul><li>${nodes.join("</li><li>")}</li></ul>`;
        } else {
            return `<p>None</p>`;
        }
    }

    clearDetailPanel () {
        document.querySelector('.course-info').innerHTML = `
            <h2>Course Explorer</h2>
            <p>Click a class to learn more about it</p>
        `;
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
        cy.elements().removeClass("minor");
        cy.elements().removeClass("systems");
        cy.elements().removeClass("info");
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
