const elements = {
    nodes: [
        { data: { id: '182', parent: '18X', title: 'Intro to Programming: Media Computation', dependencies: 0, minor: true, info: true, systems: true, description: "Problem solving, algorithm development, and data and procedural abstraction with an emphasis on developing applications that interface with the senses. Includes a formal laboratory section using program development tools. Students may receive credit for only one course from CSCI 182, 183 and 185. Fall and Spring." } },
        { data: { id: '183', parent: '18X', title: 'Intro to Programming: Numerical Methods', dependencies: 0, minor: true, info: true, systems: true, description: "Problem solving, algorithm development, and data and procedural abstraction with an emphasis on developing applications that interface with the senses. Includes a formal laboratory section using program development tools. Students may receive credit for only one course from CSCI 182, 183 and 185. Fall and Spring." } },
        { data: { id: '185', parent: '18X', title: 'Intro to Programming: Web Development', dependencies: 0, minor: true, info: true, systems: true, description: "Introduction to web page design and development. Topics include style sheets, dynamic content, scripting languages, and event handling. Students may receive credit for only one course from CSCI 182, 183 and 185. Fall and Spring." } },
        { data: { id: '18X', title: 'Introductory Programming (Either 182 or 183 or 185)', dependencies: 3, minor: true, info: true, systems: true } },
        { data: { id: '201', title: 'Intro to OOP', dependencies: 2, minor: true, info: true, systems: true, description: "An introduction to problem solving, algorithm design, implementation, and testing using object-oriented programming principles. Emphasis is placed on event-driven programming methods, including creating and manipulating objects, classes, and using object-oriented tools such as the class debugger. Pre- or corequisite: CSCI 182, 183 or 185. Fall and Spring." } },
        { data: { id: '202', title: 'Intro to Data Structures', dependencies: 12, minor: true, info: true, systems: true, description: "Data structures (lists, stacks, queues, binary trees, hash tables); searching and sorting algorithms; use of a modern, object-oriented programming language. Successful completion of this course with a grade of C or higher is required to progress through the Computer Science major or minor. Prerequisite: CSCI 201. Fall and Spring." } },
        { data: { id: '235', title: 'Intro to Systems', dependencies: 3, minor: true, info: true, systems: true, description: "Fundamentals of computer systems for programmers. Computer organization; machine representation of data and programs; program performance and optimization; memory hierarchy and memory management. Prerequisite: one course from CSCI 201 or 202 with a grade of C or higher. Fall and Spring." } },
        { data: { id: '280', title: 'Computer Science Seminar', dependencies: 1, info: true, systems: true, systems: true, description: "Professional development seminar. Exploration of career options including internships, industry, entrepreneurship, interdisciplinary opportunities, research and graduate school. Computer science in society, ethics and security. Interpersonal communication and soft skills for effective teamwork. Prerequisite: CSCI 202 with a grade of C or higher, or CSCI 201 with a grade of C or higher and permission of instructor. Fall and Spring." } },
        { data: { id: '313', title: 'Virtual Reality', dependencies: 0, description: 'Students practice techniques for creating immersive and interactive virtual reality environments, developing, presenting, defending, and improving their work based on formative faculty and peer feedback. Practical experience will be gained with tracking systems, head-mounted-displays, and 3D graphics. Alongside projects, students will complete readings and engage in discussions about virtual reality history and theory. Prerequisites: CSCI 202 or NM 251. Even years Spring.'}},
        { data: { id: '312', title: 'Artificial Intelligence', dependencies: 0 } },
        { data: { id: '329', title: 'Big Data Analytics', dependencies: 0 } },
        { data: { id: '333', title: 'Data Structures and Algorithms', dependencies: 0, info: true, systems: true } },
        { data: { id: '335', title: 'Systems II', dependencies: 0, systems: true } },
        { data: { id: '338', title: 'Software Engineering', dependencies: 1, info: true, description: "A project-oriented course in which students working in teams complete one or more projects encompassing software design and development. Students will develop their communication skills by writing project requirements, creating and evaluating prototypes, interfacing with end users, and developing and implementing test plans. Prerequisites: CSCI 202 with a grade of C or higher and CSCI 235. Spring." } },
        { data: { id: '343', title: 'Databases', dependencies: 0, info: true } },
        { data: { id: '344', title: 'Advanced Web Technologies', dependencies: 0, info: true, description: "A class in the development of clients and servers for web applications. Topics include database integration, web site management, and the development of applications with scripting languages such as JavaScript. Prerequisite: one course from CSCI 182, 183, 185 or 201. Spring." } },
        { data: { id: '346', title: 'Computer Graphics', dependencies: 0 } },
        { data: { id: '347', title: 'Game Programming', dependencies: 0, description: 'A project-oriented course that offers an introduction to game design and development techniques. Students will collaboratively gain experience creating game design documents and storyboards, develop complete projects using current game engines, and produce effective documentation of their work. Topics include game engine basics, graphics, animation, gaming rules, game structures, and environmental modeling. Prerequisite: grade of C or higher in CSCI 202. Odd years Spring.'}},
        { data: { id: '364', title: 'Cybersecurity', dependencies: 0, description: "Discusses the topic of security as it relates to computer systems. Topics covered include security policies, computer security management and risk assessment, secured network protocols, software security issues, ethical and legal aspects of cybersecurity. Prerequisites: CSCI 235 and a grade of C or higher in CSCI 202. Spring."}},
        { data: { id: '412', title: 'Computer Vision', dependencies: 0 } },
        { data: { id: '434', title: 'Theory of Computation', dependencies: 1, systems: true } },
        { data: { id: '431', title: 'Programming Languages', dependencies: 0 } },
        { data: { id: '480', title: 'Capstone I', dependencies: 1, info: true, systems: true, description: "Capstone project design. Determining hardware and software requirements. Review of relevant literature and development tools. Students develop and submit an individual capstone project proposal. Prerequisite: CSCI 280; pre- or corequisite CSCI 338. Fall and Spring." } },
        { data: { id: '481', title: 'Capstone II', dependencies: 0, info: true, systems: true, description: "Capstone project implementation. Students implement the project plan that they developed in CSCI 480. Includes an oral presentation before the department’s assembled faculty. Prerequisite: CSCI 480. Fall and Spring." } }
    ],
    edges: [
        { data: { target: '235', source: '18X' } },
        { data: { target: '329', source: '18X' } },
        { data: { target: '344', source: '18X' } },
        { data: { target: '202', source: '201' } },
        { data: { target: '235', source: '201' } },
        { data: { target: '280', source: '202' } },
        { data: { target: '312', source: '202' } },
        { data: { target: '313', source: '202' } },
        { data: { target: '335', source: '202' } },
        { data: { target: '333', source: '202' } },
        { data: { target: '338', source: '202' } },
        { data: { target: '343', source: '202' } },
        { data: { target: '346', source: '202' } },
        { data: { target: '347', source: '202' } },
        { data: { target: '364', source: '202' } },
        { data: { target: '412', source: '202' } },
        { data: { target: '434', source: '202' } },
        { data: { target: '335', source: '235' } },
        { data: { target: '364', source: '235' } },
        { data: { target: '338', source: '235' } },
        { data: { target: '480', source: '280' } },
        { data: { target: '431', source: '434' } },
        { data: { target: '480', source: '338' } },
        { data: { target: '481', source: '480' } }
    ]
};

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
                        if (data.hasTaken || data.id === '18X') {
                            return "#EEE";
                        } else {
                            return colors[key]
                        }
                    },
                    'label': function (element) {
                        const data = element.data();
                        if (data.id === '18X') {
                            return "Pick One"
                        }
                        return element.data().id;
                    },
                    'text-valign': function (element) {
                        const data = element.data();
                        if (data.id === '18X') {
                            return 'top'
                        }
                        return 'center'
                    },
                    'text-halign': function (element) {
                        const data = element.data();
                        if (data.id === '18X') {
                            return 'center'
                        }
                        return 'center'
                    },
                    'font-size': function (element) {
                        const data = element.data();
                        if (data.id === '18X') {
                            return '30px'
                        }
                        return '22px'
                    },
                    'font-weight': 'bold',
                    'color': function (element) {
                        const data = element.data();
                        if (data.hasTaken || data.id === '18X') {
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