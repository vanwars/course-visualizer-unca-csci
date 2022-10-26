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
                const dependencies = node.data().dependencies;
                console.log(dependencies + 2, Math.log2(dependencies + 2) * 100)
                let size = Math.log2(dependencies + 2) * 75 + 20; // + dependencies * 30;
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
                    'background-color': function (element) {
                        const data = element.data();
                        if (data.hasTaken || data.id === 'CSCI 18X' || data.id === 'STAT' || data.id === 'PHYS') {
                            return "#F0F0F0";
                        } else if (data.id === 'EXTERNAL') {
                            return '#EEE';
                        } else {
                            return colors[key]
                        }
                    },
                    'label': function (element) {
                        const data = element.data();
                        if (data.id === 'CSCI 18X' || data.id === 'STAT' || data.id === 'PHYS') {
                            return "Pick One"
                        } else if (data.id === 'EXTERNAL') {
                            return "Math & Science Requirements"
                        }
                        return element.data().id; //.split(" ")[1];
                    },
                    'text-valign': function (element) {
                        const data = element.data();
                        if (data.id === 'CSCI 18X' || data.id === 'STAT' || data.id === 'EXTERNAL' || data.id === 'PHYS') {
                            return 'top'
                        }
                        return 'center'
                    },
                    'text-halign': function (element) {
                        const data = element.data();
                        if (data.id === 'CSCI 18X') {
                            return 'center'
                        }
                        return 'center'
                    },
                    'font-size': function (element) {
                        const data = element.data();
                        if (data.id === 'CSCI 18X' || data.id === 'EXTERNAL') {
                            return '30px'
                        }
                        return '16px'
                    },
                    'font-weight': 'bold',
                    'color': function (element) {
                        const data = element.data();
                        if (data.hasTaken || data.id === 'CSCI 18X' || data.id === 'EXTERNAL' || data.id == 'STAT' || data.id === 'PHYS') {
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


    cy.on('click', 'node', (e) => {
        const data = e.target.data();

        document.querySelector('.course-info').innerHTML = `
            <h3>${data.title}</h3>
            <p>${data.description ? data.description : 'Some description of the course...'}</p>
            ${data.systems || data.info || data.minor ? '<h4>Required For:</h4>' : ''}
            ${data.systems ? '<span class="systems">Computer Systems</span>' : ''}
            ${data.info ? '<span class="info">Information Systems </span>' : ''}
            ${data.minor ? '<span class="minor">CS Minor</span>' : ''}
        `
        //alert(e.target.data().title);
    });

}

document.querySelector('select').addEventListener('change', function () {
    draw();
});


draw();