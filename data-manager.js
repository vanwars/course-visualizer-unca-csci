export default class DataManager {
    constructor() {
        this.key = 'AIzaSyDsr4u1uupvnmDSfJdfgHZN2IWROiihlP8';
        this.spreadsheetId = '1Q11Q_uJxCsnwMSpjMn3kCQTzRIXB0NkGBeQQL5CO6y4';
        this.rawData = {};
        this.formattedData = [];
    }

    async fetchDataFromSheets () {
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${this.spreadsheetId}/values/courses?key=${this.key}`;
        console.log(url);
        this.rawData = await fetch(url).then(response => response.json());
        const keys = this.rawData.values.shift();
        this.rawData.values.forEach(row => {
            const item = {};
            row.forEach((cell, i) => {
                cell = (cell === 'TRUE') ? true : cell;
                cell = (cell === 'FALSE') ? false : cell;
                item[keys[i]] = cell;
            }) 
            this.formattedData.push(item);
            if (item.areas) {
                item.areas = item.areas.split(",").map(tag => tag.trim()).filter(tag => tag !== '');
            } else {
                item.areas = [];
            }
            item.areas.forEach(area => {
                item[`area_${area.replace(' ', '_')}`] = true;
            });
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
        for (const course of this.formattedData) {
            const node = {
                data: course
            };
            if (course.parent && course.parent !== "") {
                node.data.parent = course.parent;
            }
            if (course.x) {
                node.position = { 
                    x: parseInt(course.x), 
                    y: parseInt(course.y) 
                }
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