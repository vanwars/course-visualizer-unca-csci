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

function resetStyles () {
    const key = document.querySelector('select').value;
    cy.edges().forEach(function (edge) {
        edge.style({
            'line-color': '#EEE',
            'source-arrow-color': '#DDD'
        });
    });
    cy.nodes().forEach(function (node) {
        if (node.isParent()) {
            node.style({
                'background-color': "#F0F0F0",
                'border-color': "#F0F0F0",
                "border-width": 0.5,
                "background-opacity": 0.1,
                'border-width': .5,
            })
        }
        else {
            node.style({
                'background-color': function (element) {
                    return colors[key];
                },
                'color': function (element) {
                    return textColors[key]
                },
                'border-width': 0,
            });
        }
    });
}

function highlightPath (evt) {
    // const selectionColor = '#e4ff1a';
    const selectionColor = '#3c91e6';
    const node = evt.target;
    resetStyles();
    node.style({
        'border-color': selectionColor,
        'background-color': selectionColor,
        'color': 'white',
        'border-width': 3,
    });
    var nodes = [];
    cy.elements().dfs({
        roots: `#${evt.target.id()}`,
        visit: function(node, edge, u, i, depth) {
            if (edge) {
                var courseID = node.data().id.replace("CSCI", "CSCI ");
                nodes.push(courseID);
                edge.style({
                    'line-color': selectionColor,
                    'source-arrow-color': selectionColor,
                    'width': 3,
                })
                node.style({
                    'border-color': selectionColor,
                    'border-width': 3
                    // 'color': 'black',
                    // "background-opacity": 1,
                })
            }
        },
        directed: true
    });
    
    const data = node.data();
    data.prerequisites = `<ul><li>${nodes.join("</li><li>")}</li></ul>`;
    document.querySelector('.course-info').innerHTML = `
        <div class="course-details">
            <h2>${data.id.replace("CSCI", "CSCI ")}: ${data.title}</h2>
            <p>${data.description ? data.description : 'Some description of the course...'}</p>
            ${data.systems || data.info || data.minor ? '<h3>Required For</h3>' : ''}
            ${data.systems ? '<span class="systems">Computer Systems</span>' : ''}
            ${data.info ? '<span class="info">Information Systems </span>' : ''}
            ${data.minor ? '<span class="minor">CS Minor</span>' : ''}
            <h3>Prerequisites</h3>
            <p>${data.prerequisites}</p>
        </div>
    `;
    setTimeout(function () {
        document.querySelector('.course-details').classList.add('visible');
    }, 100);
}

// function setNodeBackground (element) {
//     return colors[key]
// }

// function setNodeTextColor (element) {
//     return textColors[key]
// }


function getCoursesForSpecialization(elements, key) {
    console.log(elements, key);
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
                selector: ':childless',
                style: {
                    'background-color': function (element) {
                        return colors[key];
                    },
                    'color': function (element) {
                        return textColors[key]
                    },
                    'font-weight': 'bold',
                    'text-halign': 'center',
                    'label': function (element) {
                        return element.data().id; //.split(" ")[1];
                    },
                    'text-valign': 'center',
                    'font-size': '6px'
                }
            },
            {
                selector: ':parent',
                style: {
                    'background-color': "#F0F0F0",
                    'border-width': 0.5,
                    "background-opacity": 0.1,
                    'text-valign': 'bottom',
                    'font-size': '10px',
                    'color': '#555',
                    'font-weight': 'bold',
                    'label': function(el) {
                        return el.data().title;
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