const graphData = {
    "nodes": [
        {
            "data": {
                "id": 201,
                "title": "Intro to OOP",
                "minor_requirement": true,
                "comp_sys_requirement": true,
                "info_sys_requirement": true
            }
        },
        {
            "data": {
                "id": 202,
                "title": "Intro to Data Structures",
                "minor_requirement": true,
                "comp_sys_requirement": true,
                "info_sys_requirement": true
            }
        },
        {
            "data": {
                "id": 235,
                "title": "Intro to Systems",
                "minor_requirement": true,
                "comp_sys_requirement": true,
                "info_sys_requirement": true
            }
        },
        {
            "data": {
                "id": 280,
                "title": "Computer Science Seminar",
                "comp_sys_requirement": true,
                "info_sys_requirement": true
            }
        },
        {
            "data": {
                "id": 312,
                "title": "Artificial Intelligence",
                "comp_sys_requirement": false,
                "info_sys_requirement": false
            }
        },
        {
            "data": {
                "id": 329,
                "title": "Big Data Analytics",
                "info_sys_requirement": true
            }
        },
        {
            "data": {
                "id": 335,
                "title": "Systems II",
                "comp_sys_requirement": false,
                "info_sys_requirement": false,
                "minor_requirement": false
            }
        },
        {
            "data": {
                "id": 333,
                "title": "Data Structures and Algorithms",
                "minor_requirement": true,
                "comp_sys_requirement": true,
                "info_sys_requirement": true
            }
        },
        {
            "data": {
                "id": 338,
                "title": "Software Engineering",
                "comp_sys_requirement": true,
                "info_sys_requirement": true
            }
        },
        {
            "data": {
                "id": 343,
                "title": "Databases",
                "minor_requirement": true,
                "comp_sys_requirement": true,
                "info_sys_requirement": false
            }
        },
        {
            "data": {
                "id": 344,
                "title": "Advanced Web Technologies",
                "info_sys_requirement": true
            }
        },
        {
            "data": {
                "id": 346,
                "title": "Computer Graphics",
                "minor_requirement": false,
                "comp_sys_requirement": false,
                "info_sys_requirement": false
            }
        },
        {
            "data": {
                "id": 412,
                "title": "Computer Vision",
                "minor_requirement": false,
                "comp_sys_requirement": false,
                "info_sys_requirement": false
            }
        },
        {
            "data": {
                "id": 431,
                "title": "Programming Languages",
                "minor_requirement": false,
                "comp_sys_requirement": false,
                "info_sys_requirement": false
            }
        },
        {
            "data": {
                "id": 434,
                "title": "Theory of Computation",
                "minor_requirement": false,
                "comp_sys_requirement": true,
                "info_sys_requirement": false
            }
        },
        {
            "data": {
                "id": 480,
                "title": "Capstone I",
                "comp_sys_requirement": true,
                "info_sys_requirement": true
            }
        },
        {
            "data": {
                "id": 481,
                "title": "Capstone II",
                "minor_requirement": true,
                "comp_sys_requirement": true,
                "info_sys_requirement": true
            }
        }

    ],
    "edges": [
        { "data": { "target": 202, "source": 201 } },
        { "data": { "target": 235, "source": 201 } },
        { "data": { "target": 280, "source": 202 } },
        { "data": { "target": 312, "source": 202 } },
        { "data": { "target": 335, "source": 202 } },
        { "data": { "target": 335, "source": 235 } },
        { "data": { "target": 338, "source": 202 } },
        { "data": { "target": 338, "source": 235 } },
        { "data": { "target": 333, "source": 202 } },
        { "data": { "target": 343, "source": 202 } },
        { "data": { "target": 344, "source": 201 } },
        { "data": { "target": 329, "source": 201 } },
        { "data": { "target": 346, "source": 202 } },
        { "data": { "target": 412, "source": 202 } },
        { "data": { "target": 434, "source": 202 } },
        { "data": { "target": 431, "source": 434 } },
        { "data": { "target": 480, "source": 280 } },
        { "data": { "target": 480, "source": 338 } },
        { "data": { "target": 481, "source": 480 } }
    ]
}