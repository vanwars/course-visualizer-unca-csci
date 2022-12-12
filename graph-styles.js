const graphProperties = {
    nodeSize: 40,
    nodeSizeSelected: 45,
    fontSizeSelected: '9px',
    selectedColor: '#3c91e6',
    systems: '#413C58',
    info: '#6a8e7f',
    minor: '#EFCB68',
    area_games: '#7F9C90',
    area_systems: '#EBBC4E',
    area_virtual_reality: '#E6A65D',
    area_software: '#A6192E',
    area_data_science: '#C26E60',
    area_hci: '#4298B5',
    area_theory: '#7C4D3A',
    featured: '#EEE'
}

const graphStyles = [
    {
        selector: ':parent',
        style: {
            // 'background-color': "#EEE",
            "background-opacity": 0,
            'border-width': 0.5,
            'text-valign': 'top',
            'text-margin-y': '10px',
            'font-size': '9px',
            'color': '#555',
            'font-weight': 'bold',
            'label': el =>  {
                return el.data().title;
            }
        }
    },
    {
        selector: ':childless',
        style: {
            'background-color': '#EEE',
            'border-color': '#F0F0F0',
            'color': '#444',
            'font-weight': 'bold',
            'text-halign': 'center',
            'label': element => {
                return element.data().id;
            },
            'width': graphProperties.nodeSize,
            'height': graphProperties.nodeSize,
            'text-valign': 'center',
            'font-size': '7px',
            'transition-property': 'border-width, border-color, width, height, border-opacity, background-color',
            'transition-duration' : '0.5s',
            'transition-timing-function': 'ease-in'
        }
    },
    {
        selector: 'edge',
        style: {
            'width': 1,
            'source-arrow-shape': 'triangle',
            'line-color': '#DDD',
            'source-arrow-color': '#DDD',
            'curve-style': 'bezier',
            'transition-property': 'width, line-color',
            'transition-duration' : '0.5s',
            'transition-timing-function': 'ease-in'
        }
    },
    {
        selector: 'node.featured',
        style: {
            'border-color': () => {
                return graphProperties.featured
            },
            'background-color': () => {
                return graphProperties.featured
            },
            'background-opacity': 1,
            'color': '#FFF',
            'font-size': graphProperties.fontSizeSelected,
            'width': graphProperties.nodeSizeSelected,
            'height': graphProperties.nodeSizeSelected,
            'transition-property': 'border-width, border-color, background-opacity, color, width, height, font-size, background-color',
            'transition-duration' : '0.5s',
            'transition-timing-function': 'ease-in'
        }
    },
    {
        selector: 'node.featured node:parent',
        style: {
            "background-opacity": 0,
            // 'border-color': () => {
            //     return graphProperties.featured
            // },
            'color': () => {
                return graphProperties.featured
            },
            'transition-property': 'border-width, border-color, background-opacity, color, width, height, font-size, background-color',
            'transition-duration' : '0.5s',
            'transition-timing-function': 'ease-in'
        }
    },
    {
        selector: 'node.highlighted',
        style: {
            'border-color': graphProperties.selectedColor,
            'background-color': graphProperties.selectedColor,
            'color': 'white',
            'border-width': 3,
            'width': graphProperties.nodeSizeSelected,
            'height': graphProperties.nodeSizeSelected,
            'transition-property': 'border-width, border-color, color, width, height, border-opacity, background-color',
            'transition-duration' : '0.5s',
            'transition-timing-function': 'ease-in'
        }
    },
    {
        selector: 'edge.selected',
        style: {
            'line-color': graphProperties.selectedColor,
            'source-arrow-color': graphProperties.selectedColor,
            'width': 3,
            'transition-property': 'width, line-color',
            'transition-duration' : '0.5s',
            'transition-timing-function': 'ease-in'
        }
    },
    {
        selector: 'node.selected',
        style: {
            'border-color': graphProperties.selectedColor,
            'border-width': 3,
            'width': graphProperties.nodeSizeSelected,
            'height': graphProperties.nodeSizeSelected,
            'transition-property': 'border-width, border-color, color, width, height, border-opacity, background-color',
            'transition-duration' : '0.5s',
            'transition-timing-function': 'ease-in'
        }
    }
];

export { graphStyles, graphProperties };