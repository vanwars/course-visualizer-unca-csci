export default class DataManager {
    constructor() {
        this.key = 'AIzaSyDsr4u1uupvnmDSfJdfgHZN2IWROiihlP8';
        this.spreadsheetId = '1Q11Q_uJxCsnwMSpjMn3kCQTzRIXB0NkGBeQQL5CO6y4';
        this.rawData = {};
        this.formattedData = {};
    }

    async fetchDataFromSheets () {
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${this.spreadsheetId}/values/courses?key=${this.key}`;
        console.log(url);
        this.rawData = await fetch(url).then(response => response.json());
        const keys = this.rawData.values.shift();
        this.rawData.values.forEach(row => {
            const item = {};
            row.forEach((cell, i) => {
                cell = cell === 'TRUE' ? true : cell;
                cell = cell === 'FALSE' ? false : cell;
                item[keys[i]] = cell;
            }) 
            this.formattedData[item.id] = item;
            if (item.areas) {
                item.areas = item.areas.split(",").map(tag => tag.trim()).filter(tag => tag !== '');
            } else {
                item.areas = [];
            }
            if (item.prerequisites  ) {
                item.prerequisites = item.prerequisites.split(",").map(prereq => prereq.trim()).filter(prereq => prereq !== '');
            } else {
                item.prerequisites = [];
            }
        });
        console.log(this.formattedData);
        // this.display();
        return this.getGraphRepresentation();
    }

    getGraphRepresentation () {
        const graph = {
            nodes: [],
            edges: []
        }
        for (const key in this.formattedData) {
            const course = this.formattedData[key];
            const node = {
                data: {
                    id: course.id,
                    parent: course.parent,
                    title: course.title
                }
            };
            if (course.x) {
                node.position = { x: course.x, y: course.y }
            }
            graph.nodes.push(node);
            course.prerequisites.forEach(prereq => {
                console.log('Pre-edge:', course.id, prereq);
                const edge = {
                    data: {
                        source: course.id,
                        target: prereq
                    }
                };
                console.log('Edge:', JSON.stringify(edge));
                graph.edges.push(edge);
            });
        }
        console.log(graph);
        return graph;
    }
}