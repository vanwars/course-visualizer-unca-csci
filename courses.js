export default {
    nodes: [
        { 
            data: { id: 'CSCI 182', parent: 'CSCI 18X', title: 'Intro to Programming: Media Computation', dependencies: 0, minor: true, info: true, systems: true, description: "Problem solving, algorithm development, and data and procedural abstraction with an emphasis on developing applications that interface with the senses. Includes a formal laboratory section using program development tools. Students may receive credit for only one course from CSCI 182, 183 and 185. Fall and Spring." },
            position: { x: 150, y: 400 }
        },
        { 
            data: { id: 'CSCI 183', parent: 'CSCI 18X', title: 'Intro to Programming: Numerical Methods', dependencies: 0, minor: true, info: true, systems: true, description: "Problem solving, algorithm development, and data and procedural abstraction with an emphasis on developing applications that interface with the senses. Includes a formal laboratory section using program development tools. Students may receive credit for only one course from CSCI 182, 183 and 185. Fall and Spring." },
            position: { x: 200, y: 400 } 
        },
        { 
            data: { id: 'CSCI 185', parent: 'CSCI 18X', title: 'Intro to Programming: Web Development', dependencies: 0, minor: true, info: true, systems: true, description: "Introduction to web page design and development. Topics include style sheets, dynamic content, scripting languages, and event handling. Students may receive credit for only one course from CSCI 182, 183 and 185. Fall and Spring." },
            position: { x: 175, y: 425 }
        },
        { 
            data: { id: 'CSCI 18X', title: 'Introductory Programming (Either 182 or 183 or 185)', dependencies: 3, minor: true, info: true, systems: true }
        },
        { 
            data: { id: 'CSCI 201', title: 'Intro to OOP', dependencies: 2, minor: true, info: true, systems: true, description: "An introduction to problem solving, algorithm design, implementation, and testing using object-oriented programming principles. Emphasis is placed on event-driven programming methods, including creating and manipulating objects, classes, and using object-oriented tools such as the class debugger. Pre- or corequisite: CSCI 182, 183 or 185. Fall and Spring." },
            position: { x: 50, y: 400 }
        },
        { 
            data: { id: 'CSCI 202', title: 'Intro to Data Structures', dependencies: 12, minor: true, info: true, systems: true, description: "Data structures (lists, stacks, queues, binary trees, hash tables); searching and sorting algorithms; use of a modern, object-oriented programming language. Successful completion of this course with a grade of C or higher is required to progress through the Computer Science major or minor. Prerequisite: CSCI 201. Fall and Spring." },
            position: { x: 150, y: 325 }
        },
        { 
            data: { id: 'CSCI 235', title: 'Intro to Systems', dependencies: 3, minor: true, info: true, systems: true, description: "Fundamentals of computer systems for programmers. Computer organization; machine representation of data and programs; program performance and optimization; memory hierarchy and memory management. Prerequisite: one course from CSCI 201 or 202 with a grade of C or higher. Fall and Spring." },
            position: { x: 30, y: 325 }
        },
        { 
            data: { id: 'CSCI 280', title: 'Computer Science Seminar', dependencies: 1, info: true, systems: true, systems: true, description: "Professional development seminar. Exploration of career options including internships, industry, entrepreneurship, interdisciplinary opportunities, research and graduate school. Computer science in society, ethics and security. Interpersonal communication and soft skills for effective teamwork. Prerequisite: CSCI 202 with a grade of C or higher, or CSCI 201 with a grade of C or higher and permission of instructor. Fall and Spring." },
            position: { x: 150, y: 250 } 
        },
        { 
            data: { id: 'CSCI 333', title: 'Data Structures and Algorithms', dependencies: 0, info: true, systems: true, description: "Data structures, efficient algorithms that use them, and their representation in programming languages. Topics include recursive analysis, randomized analysis, searching and sorting algorithms along with their data structures, order statistic selection, graph algorithms, and a selection of additional, related topics. Students will analyze their efficiency and implement them in a modern programming language. Prerequisite: grade of C or higher in CSCI 202. Fall." },
            position: { x: 200, y: 250 } 
        },
        { 
            data: { id: 'CSCI 313', title: 'Virtual Reality', dependencies: 0, description: 'Students practice techniques for creating immersive and interactive virtual reality environments, developing, presenting, defending, and improving their work based on formative faculty and peer feedback. Practical experience will be gained with tracking systems, head-mounted-displays, and 3D graphics. Alongside projects, students will complete readings and engage in discussions about virtual reality history and theory. Prerequisites: CSCI 202 or NM 251. Even years Spring.'},
            position: { x: 250, y: 250 } 
        },
        { 
            data: { id: 'CSCI 312', title: 'Artificial Intelligence', dependencies: 0, description: "An introduction to the sub-discipline of artificial intelligence. Students will investigate and implement various models of intelligent agents interacting within defined environments. Topics include knowledge representation, problem-solving via search, reasoning via probabilistic methods, and machine learning. Prerequisite: grade of C or higher in CSCI 202; STAT 185 or 225. Odd years Fall." },
            position: { x: 300, y: 250 } 
        },
        { 
            data: { id: 'CSCI 343', title: 'Databases', dependencies: 0, info: true, description: "Study of theory and application of database management systems. Topics include database design, data normalization, transaction management and data access methods. Prerequisite: grade of C or higher in CSCI 202. Fall." },
            position: { x: 350, y: 250 } 
        },
        { 
            data: { id: 'CSCI 329', title: 'Big Data Analytics', dependencies: 0 },
            position: { x: 270, y: 400 } 
        },
        { 
            data: { id: 'CSCI 335', title: 'Systems II', dependencies: 0, systems: true, description: "Advanced computer systems for programmers. Selected topics in operating systems, networking, and parallel computing. Prerequisite: CSCI 202 with a grade of C or higher and CSCI 235. Fall." },
            position: { x: 30, y: 250 } 
        },
        { 
            data: { id: 'CSCI 338', title: 'Software Engineering', dependencies: 1, info: true, description: "A project-oriented course in which students working in teams complete one or more projects encompassing software design and development. Students will develop their communication skills by writing project requirements, creating and evaluating prototypes, interfacing with end users, and developing and implementing test plans. Prerequisites: CSCI 202 with a grade of C or higher and CSCI 235. Spring." },
            position: { x: 90, y: 250 } 
        },
        { 
            data: { id: 'CSCI 480', title: 'Capstone I', dependencies: 1, info: true, systems: true, description: "Capstone project design. Determining hardware and software requirements. Review of relevant literature and development tools. Students develop and submit an individual capstone project proposal. Prerequisite: CSCI 280; pre- or corequisite CSCI 338. Fall and Spring." }, 
            position: { x: 100, y: 200 }
        },
        { 
            data: { id: 'CSCI 481', title: 'Capstone II', dependencies: 0, info: true, systems: true, description: "Capstone project implementation. Students implement the project plan that they developed in CSCI 480. Includes an oral presentation before the department’s assembled faculty. Prerequisite: CSCI 480. Fall and Spring." }, 
            position: { x: 100, y: 150 }
        },
        // { 
        //     data: { id: 'CSCI 344', title: 'Advanced Web Technologies', dependencies: 0, info: true, description: "A class in the development of clients and servers for web applications. Topics include database integration, web site management, and the development of applications with scripting languages such as JavaScript. Prerequisite: one course from CSCI 182, 183, 185 or 201. Spring." }, 
        //     position: { x: 100, y: 0 }
        // },
        // { 
        //     data: { id: 'CSCI 346', title: 'Computer Graphics', dependencies: 0, description: "The study of programming techniques for the display of two-and three-dimensional objects. Topics include affine transformations, hidden line and surface elimination, raster methods, color theory, and animation. Prerequisite: grade of C or higher in CSCI 202; pre- or corequisite: MATH 365. Even years Spring." }, 
        //     position: { x: 100, y: 0 }
        // },
        // { 
        //     data: { id: 'CSCI 347', title: 'Game Programming', dependencies: 0, description: 'A project-oriented course that offers an introduction to game design and development techniques. Students will collaboratively gain experience creating game design documents and storyboards, develop complete projects using current game engines, and produce effective documentation of their work. Topics include game engine basics, graphics, animation, gaming rules, game structures, and environmental modeling. Prerequisite: grade of C or higher in CSCI 202. Odd years Spring.'},
        //     position: { x: 100, y: 0 }
        // },
        // { 
        //     data: { id: 'CSCI 364', title: 'Cybersecurity', dependencies: 0, description: "Discusses the topic of security as it relates to computer systems. Topics covered include security policies, computer security management and risk assessment, secured network protocols, software security issues, ethical and legal aspects of cybersecurity. Prerequisites: CSCI 235 and a grade of C or higher in CSCI 202. Spring."},
        //     position: { x: 100, y: 0 }
        // },
        // { 
        //     data: { id: 'CSCI 412', title: 'Computer Vision', dependencies: 0, description: "A study of inference from noisy and uncertain data using probabilistic, statistical, data-driven approaches. Topics include image processing; segmentation, grouping, and boundary detection; recognition and detection; motion estimation and structure from motion. Prerequisites: grade of C or higher in CSCI 202; STAT 185 or 225. Even years Fall." }, 
        //     position: { x: 100, y: 0 }
        // },
        // { 
        //     data: { id: 'CSCI 434', title: 'Theory of Computation', dependencies: 1, systems: true, description: "A study of formal models of computation, grammars and languages, including finite state machines, regular expressions and Turing machines. Prerequisites: a grade of C or higher in CSCI 202; MATH 251. Fall." }, 
        //     position: { x: 100, y: 0 }
        // },
        // { 
        //     data: { id: 'CSCI 431', title: 'Programming Languages', dependencies: 0, description: "Definition and design of high-level programming languages; formal tools for language definition and specification of semantics; case studies of several languages. Prerequisite: CSCI 434. Even years Spring." }, 
        //     position: { x: 100, y: 0 }
        // },
        // { 
        //     data: { id: 'MATH 191', parent: 'EXTERNAL', title: 'Calculus I', dependencies: 0, info: true, systems: true },
        //     position: { x: 100, y: 0 }
        // },
        // { 
        //     data: { id: 'MATH 251', parent: 'EXTERNAL', title: 'Discrete Mathematics', dependencies: 0, info: true, systems: true },
        //     position: { x: 100, y: 0 }
        // },
        // { 
        //     data: { id: 'STAT 185', parent: 'STAT', title: 'Introductory Statistics', dependencies: 0, info: true, systems: true },
        //     position: { x: 100, y: 0 }
        // },
        // { 
        //     data: { id: 'STAT 225', parent: 'STAT', title: 'Introduction to Calculus-Based Statistics', dependencies: 0, info: true, systems: true },
        //     position: { x: 100, y: 0 }
        // },
        // { 
        //     data: { id: 'PHYS 221', parent: 'EXTERNAL', title: 'Physics I', dependencies: 2, systems: true },
        //     position: { x: 100, y: 0 }
        // },
        // { 
        //     data: { id: 'PHYS 222', parent: 'PHYS', title: 'Physics II', dependencies: 0, systems: true },
        //     position: { x: 100, y: 0 }
        // },
        // { 
        //     data: { id: 'PHYS 231', parent: 'PHYS', title: 'Introductory Physics II', dependencies: 0, systems: true },
        //     position: { x: 100, y: 0 }
        // },
        // { 
        //     data: { id: 'STAT', parent: 'EXTERNAL', title: 'Statistics Requirement', dependencies: 0, info: true, systems: true },
        //     position: { x: 100, y: 0 }
        // },
        // { 
        //     data: { id: 'PHYS', parent: 'EXTERNAL', title: 'Physics Requirements', dependencies: 0, systems: true },
        //     position: { x: 100, y: 0 }
        // },
        // { 
        //     data: { id: 'EXTERNAL', title: 'Math & Physics Requirements', dependencies: 0, systems: true, info: true },
        //     position: { x: 100, y: 0 }
        // },
    ],
    edges: [
        // { data: { target: 'CSCI 235', source: 'CSCI 18X' } },
        { data: { target: 'CSCI 329', source: 'CSCI 18X' } },
        // { data: { target: 'CSCI 344', source: 'CSCI 18X' } },
        { data: { target: 'CSCI 202', source: 'CSCI 201' } },
        { data: { target: 'CSCI 202', source: 'CSCI 18X' } },
        { data: { target: 'CSCI 235', source: 'CSCI 201' } },
        { data: { target: 'CSCI 280', source: 'CSCI 202' } },
        { data: { target: 'CSCI 312', source: 'CSCI 202' } },
        { data: { target: 'CSCI 313', source: 'CSCI 202' } },
        { data: { target: 'CSCI 335', source: 'CSCI 202' } },
        { data: { target: 'CSCI 333', source: 'CSCI 202' } },
        { data: { target: 'CSCI 338', source: 'CSCI 202' } },
        { data: { target: 'CSCI 343', source: 'CSCI 202' } },
        // { data: { target: 'CSCI 346', source: 'CSCI 202' } },
        // { data: { target: 'CSCI 347', source: 'CSCI 202' } },
        // { data: { target: 'CSCI 364', source: 'CSCI 202' } },
        // { data: { target: 'CSCI 412', source: 'CSCI 202' } },
        // { data: { target: 'CSCI 434', source: 'CSCI 202' } },
        { data: { target: 'CSCI 335', source: 'CSCI 235' } },
        // { data: { target: 'CSCI 364', source: 'CSCI 235' } },
        { data: { target: 'CSCI 338', source: 'CSCI 235' } },
        { data: { target: 'CSCI 480', source: 'CSCI 280' } },
        // { data: { target: 'CSCI 431', source: 'CSCI 434' } },
        { data: { target: 'CSCI 480', source: 'CSCI 338' } },
        { data: { target: 'CSCI 481', source: 'CSCI 480' } },
        // { data: { target: 'MATH 251', source: 'MATH 191' } },
        // { data: { target: 'PHYS 222', source: 'PHYS 221' } },
        // { data: { target: 'PHYS 231', source: 'PHYS 221' } }
    ]
};