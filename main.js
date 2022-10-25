const elements = {
    nodes: [
        { data: { id: '182', title: 'Intro to Programming: Media Computation', dependencies: 3, hasTaken: true, minor: true, info: true, systems: true } },
        { data: { id: '183', title: 'Intro to Programming: Numerical Methods', dependencies: 0, hasTaken: true, minor: true, info: true, systems: true } },
        { data: { id: '185', title: 'Intro to Programming: Web Development', dependencies: 0, hasTaken: true, minor: true, info: true, systems: true } },
        { data: { id: '201', title: 'Intro to OOP', dependencies: 2, hasTaken: true, minor: true, info: true, systems: true } },
        { data: { id: '202', title: 'Intro to Data Structures', dependencies: 9, hasTaken: true, minor: true, info: true, systems: true } },
        { data: { id: '235', title: 'Intro to Systems', dependencies: 2, hasTaken: true, minor: true, info: true, systems: true } },
        { data: { id: '280', title: 'Computer Science Seminar', dependencies: 1, info: true, systems: true, systems: true } },
        { data: { id: '312', title: 'Artificial Intelligence', dependencies: 0 } },
        { data: { id: '329', title: 'Big Data Analytics', dependencies: 0 } },
        { data: { id: '333', title: 'Data Structures and Algorithms', dependencies: 0, info: true, systems: true } },
        { data: { id: '335', title: 'Systems II', dependencies: 0, systems: true } },
        { data: { id: '338', title: 'Software Engineering', dependencies: 1, info: true } },
        { data: { id: '343', title: 'Databases', dependencies: 0, info: true } },
        { data: { id: '344', title: 'Advanced Web Technologies', dependencies: 0, info: true } },
        { data: { id: '346', title: 'Computer Graphics', dependencies: 0 } },
        { data: { id: '412', title: 'Computer Vision', dependencies: 0 } },
        { data: { id: '434', title: 'Theory of Computation', dependencies: 1, systems: true } },
        { data: { id: '431', title: 'Programming Languages', dependencies: 0 } },
        { data: { id: '480', title: 'Capstone I', dependencies: 1, info: true, systems: true } },
        { data: { id: '481', title: 'Capstone II', dependencies: 0, info: true, systems: true } }
    ],
    edges: [
        { data: { target: '235', source: '182' } },
        { data: { target: '329', source: '182' } },
        { data: { target: '344', source: '182' } },
        { data: { target: '202', source: '201' } },
        { data: { target: '235', source: '201' } },
        { data: { target: '280', source: '202' } },
        { data: { target: '312', source: '202' } },
        { data: { target: '335', source: '202' } },
        { data: { target: '333', source: '202' } },
        { data: { target: '338', source: '202' } },
        { data: { target: '343', source: '202' } },
        { data: { target: '346', source: '202' } },
        { data: { target: '412', source: '202' } },
        { data: { target: '434', source: '202' } },
        { data: { target: '335', source: '235' } },
        { data: { target: '338', source: '235' } },
        { data: { target: '480', source: '280' } },
        { data: { target: '431', source: '434' } },
        { data: { target: '480', source: '338' } },
        { data: { target: '481', source: '480' } }
    ]
};


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
                        return data.hasTaken ? "#EEE" : "teal"
                    },
                    'label': function (element) {
                        return element.data().id;
                    },
                    'text-valign': 'center',
                    'text-halign': 'center',
                    'font-size': '22px',
                    'font-weight': 'bold',
                    'color': function (element) {
                        const data = element.data();
                        return data.hasTaken ? "#444" : "white"
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
        elements: getCoursesForSpecialization(elements, document.querySelector('select').value)
    });


    cy.on('click', 'node', (e) => {
        const data = e.target.data();

        document.querySelector('.course-info').innerHTML = `
            <h3>${data.title}</h3>
            <p>text text text text
        `
        //alert(e.target.data().title);
    });

}

document.querySelector('select').addEventListener('change', function () {
    draw();
});


draw();