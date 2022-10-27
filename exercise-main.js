import elements from "./courses.js";
const colors = {
    'info': '#6a8e7f',
    'systems': '#413C58',
    'minor': '#EFCB68',
    '': '#CCC'
}

const textColors = {
    'info': 'white',
    'systems': 'white',
    'minor': '#444',
    '': '#444'
}


function getCoursesForSpecialization(elements, key) {
    if (!key) {
        return elements;
    }
    const graphInfo = {
        nodes: [],
        edges: []
    };
    for (const node of elements.nodes) {
        if (node.data[key]) {
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

function draw() {
    const key = document.querySelector('select').value;
    document.querySelector('#cy').innerHTML = "";
    var cy = window.cy = cytoscape({
        container: document.getElementById('cy'),

        ready: function () {
            this.nodes().forEach(function (node) {
                let size = 100;
                node.css("width", size);
                node.css("height", size);
            });
            this.layout({ name: 'cose-bilkent', animationDuration: 500 }).run();
            // this.layout({name: 'breadthfirst', animationDuration: 1000}).run();
        },

        //https://js.cytoscape.org/#cy.style
        style: [
            {
                selector: 'node',
                style: {
                    'background-color': 'teal',
                    'label': function (element) {
                        const data = element.data();
                        return element.data().id; //.split(" ")[1];
                    },
                    'text-valign': 'center',
                    'text-halign': 'center',
                    'font-size': '16px',
                    'font-weight': 'bold',
                    'color': 'white'
                }
            },

            {
                selector: 'edge',
                style: {
                    'width': 6,
                    'target-arrow-shape': 'triangle',
                    'line-color': '#888',
                    'target-arrow-color': '#888',
                    'curve-style': 'bezier'
                }
            }
        ],
        elements: getCoursesForSpecialization(elements, key)
    });
}

document.querySelector('select').addEventListener('change', function () {
    draw();
});


draw();