import elements from "./courses.js";
const colors = {
    'info': '#6a8e7f',
    'systems': '#413C58',
    'minor': '#EFCB68',
    '': '#EEE'
}

const textColors = {
    'info': 'white',
    'systems': 'white',
    'minor': '#444',
    '': '#444'
}

function highlightPath (evt) {
    const node = evt.target;
    cy.edges().forEach(function (edge) {
        edge.css('line-color', '#EEE');
        edge.css('source-arrow-color', '#DDD');
    });
    cy.nodes().forEach(function (edge) {
        edge.css('background-color', '#EEE');
        edge.css('color', '#444');
    });
    node.style({
        'background-color': '#6a8e7f',
        'color': 'white'
    });
    var nodes = [];
    cy.elements().dfs({
        roots: `#${evt.target.id()}`,
        visit: function(node, edge, u, i, depth) {
            if (edge) {
                var courseID = node.data().id.replace("CSCI", "CSCI ");
                nodes.push(courseID);
                edge.style({
                    'line-color': '#6a8e7f',
                    'source-arrow-color': '#6a8e7f'
                })
                node.style({
                    'background-color': '#6a8e7f',
                    'color': 'white'
                })
            }
        },
        directed: true
    });
    const data = node.data();
    data.prerequisites = `<ul><li>${nodes.join("</li><li>")}</li></ul>`;
    document.querySelector('.course-info').innerHTML = `
        <h3>${data.id.replace("CSCI", "CSCI ")}: ${data.title}</h3>
        <p>${data.description ? data.description : 'Some description of the course...'}</p>
        ${data.systems || data.info || data.minor ? '<h4>Required For:</h4>' : ''}
        ${data.systems ? '<span class="systems">Computer Systems</span>' : ''}
        ${data.info ? '<span class="info">Information Systems </span>' : ''}
        ${data.minor ? '<span class="minor">CS Minor</span>' : ''}
        <h3>Prerequisites</h3>
        <p>${data.prerequisites}</p>
    `;
}

// function showCourseInfo (evt) {
//     const data = evt.target.data();

    
// }


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
                // const dependencies = node.data().dependencies;
                // console.log(dependencies + 2, Math.log2(dependencies + 2) * 100)
                //let size = Math.log2(dependencies + 2) * 12 + 10; // + dependencies * 30;
                let size = 35;
                node.css("width", size);
                node.css("height", size);
            });
        },
        layout: {
            name: 'preset'
        },

        style: [
            {
                selector: 'node',
                style: {
                    'background-color': function (element) {
                        const data = element.data();
                        if (data.hasTaken || data.id === 'CSCI18X' || data.id === 'STAT' || data.id === 'PHYS') {
                            return "#FFF";
                        } else if (data.id === 'EXTERNAL') {
                            return '#EEE';
                        } else {
                            return colors[key]
                        }
                    },
                    'label': function (element) {
                        const data = element.data();
                        if (data.id === 'CSCI18X' || data.id === 'STAT' || data.id === 'PHYS') {
                            return ""; //"Pick One"
                        } else if (data.id === 'EXTERNAL') {
                            return "Math & Science Requirements"
                        }
                        return element.data().id; //.split(" ")[1];
                    },
                    'text-valign': function (element) {
                        const data = element.data();
                        if (data.id === 'CSCI18X' || data.id === 'STAT' || data.id === 'EXTERNAL' || data.id === 'PHYS') {
                            return 'bottom'
                        }
                        return 'center'
                    },
                    'text-halign': function (element) {
                        const data = element.data();
                        if (data.id === 'CSCI18X') {
                            return 'center'
                        }
                        return 'center'
                    },
                    'font-size': function (element) {
                        const data = element.data();
                        if (data.id === 'CSCI18X' || data.id === 'EXTERNAL') {
                            return '8px'
                        }
                        return '6px'
                    },
                    'font-weight': 'bold',
                    'color': function (element) {
                        const data = element.data();
                        if (data.hasTaken || data.id === 'CSCI18X' || data.id === 'EXTERNAL' || data.id == 'STAT' || data.id === 'PHYS') {
                            return "#444";
                        } else {
                            return textColors[key]
                        }
                    }
                }
            },

            {
                selector: 'edge',
                style: {
                    'width': 1,
                    'source-arrow-shape': 'triangle',
                    'line-color': '#DDD',
                    'source-arrow-color': '#DDD',
                    'curve-style': 'bezier'
                }
            }
        ],
        elements: getCoursesForSpecialization(elements, key)
    });

    cy.bind('click', 'node', highlightPath);
}


document.querySelector('select').addEventListener('change', function () {
    draw();
});


draw();