const elements = {
    nodes: [
      { data: { id: '182', title: 'Intro to Programming: Media Computation', dependencies: 3, hasTaken: true } },
      { data: { id: '183', title: 'Intro to Programming: Numerical Methods', dependencies: 0, hasTaken: true } },
      { data: { id: '185', title: 'Intro to Programming: Web Development', dependencies: 0, hasTaken: true } },
      { data: { id: '201', title: 'Intro to OOP', dependencies: 2, hasTaken: true } },
      { data: { id: '202', title: 'Intro to Data Structures', dependencies: 9, hasTaken: true } },
      { data: { id: '235', title: 'Intro to Systems', dependencies: 2, hasTaken: true } },
      { data: { id: '280', title: 'Computer Science Seminar', dependencies: 1 } },
      { data: { id: '312', title: 'Artificial Intelligence', dependencies: 0  } },
      { data: { id: '329', title: 'Big Data Analytics', dependencies: 0  } },
      { data: { id: '333', title: 'Data Structures and Algorithms', dependencies: 0 } },
      { data: { id: '335', title: 'Systems II', dependencies: 0  } },
      { data: { id: '338', title: 'Software Engineering', dependencies: 1  } },
      { data: { id: '343', title: 'Databases', dependencies: 0  } },
      { data: { id: '344', title: 'Advanced Web Technologies', dependencies: 0  } },
      { data: { id: '346', title: 'Computer Graphics', dependencies: 0  } },
      { data: { id: '412', title: 'Computer Vision', dependencies: 0  } },
      { data: { id: '434', title: 'Theory of Computation', dependencies: 1  } },
      { data: { id: '431', title: 'Programming Languages', dependencies: 0  } },
      { data: { id: '480', title: 'Capstone I', dependencies: 1  } },
      { data: { id: '481', title: 'Capstone II', dependencies: 0  } }
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
  var cy = window.cy = cytoscape({
    container: document.getElementById('cy'),

    ready: function(){
      this.nodes().forEach(function(node) {
        const dependencies = node.data().dependencies;
        let size = 100 + dependencies * 30;
        node.css("width", size);
        node.css("height", size);
      });
       this.layout({name: 'cose-bilkent', animationDuration: 500}).run();
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
          'width': 8,
          'target-arrow-shape': 'triangle',
          'line-color': '#888',
          'target-arrow-color': '#888',
          'curve-style': 'bezier'
        }
      }
    ],
    elements: elements
  });

  cy.on('click', 'node', (e) => {
    const data = e.target.data();

    document.querySelector('#info').innerHTML = `
      <section class="card">
        <h2>${data.title}</h2>
        <p>text text text text
      </section>
    `
    //alert(e.target.data().title);
  });