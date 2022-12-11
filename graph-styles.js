let nodeSize = 40;
let nodeSizeSelected = 45;
let fontSizeSelected = '9px';
let selectedColor = '#3c91e6';
let systemsColor = '#413C58';
let infoColor = '#6a8e7f';
let minorColor = '#EFCB68';

const graphStyles = [
    {
        selector: ':parent',
        style: {
            'background-color': "#F0F0F0",
            'border-width': 0.5,
            "background-opacity": 0.1,
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
            'width': nodeSize,
            'height': nodeSize,
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
        selector: 'node.minor:childless',
        style: {
            'border-color': minorColor,
            'background-color': minorColor,
            'color': '#444',
            'font-size': fontSizeSelected,
            'width': nodeSizeSelected,
            'height': nodeSizeSelected,
            'transition-property': 'border-width, border-color, color, width, height, font-size, background-color',
            'transition-duration' : '0.5s',
            'transition-timing-function': 'ease-in'
        }
    },
    {
        selector: 'node.systems:childless',
        style: {
            'border-color': systemsColor,
            'background-color': systemsColor,
            'color': 'white',
            'width': nodeSizeSelected,
            'height': nodeSizeSelected,
            'font-size': fontSizeSelected,
            'transition-property': 'border-width, border-color, color, width, height, font-size, background-color',
            'transition-duration' : '0.5s',
            'transition-timing-function': 'ease-in'
        }
    },
    {
        selector: 'node.info:childless',
        style: {
            'border-color': infoColor,
            'background-color': infoColor,
            'color': 'white',
            'width': nodeSizeSelected,
            'height': nodeSizeSelected,
            'font-size': fontSizeSelected,
            'transition-property': 'border-width, border-color, color, width, height, font-size, background-color',
            'transition-duration' : '0.5s',
            'transition-timing-function': 'ease-in'
        }
    },
    {
        selector: 'node.highlighted',
        style: {
            'border-color': selectedColor,
            'background-color': selectedColor,
            'color': 'white',
            'border-width': 3,
            'width': nodeSizeSelected,
            'height': nodeSizeSelected,
            'transition-property': 'border-width, border-color, color, width, height, border-opacity, background-color',
            'transition-duration' : '0.5s',
            'transition-timing-function': 'ease-in'
        }
    },
    {
        selector: 'edge.selected',
        style: {
            'line-color': selectedColor,
            'source-arrow-color': selectedColor,
            'width': 3,
            'transition-property': 'width, line-color',
            'transition-duration' : '0.5s',
            'transition-timing-function': 'ease-in'
        }
    },
    {
        selector: 'node.selected',
        style: {
            'border-color': selectedColor,
            'border-width': 3,
            'width': nodeSizeSelected,
            'height': nodeSizeSelected,
            'transition-property': 'border-width, border-color, color, width, height, border-opacity, background-color',
            'transition-duration' : '0.5s',
            'transition-timing-function': 'ease-in'
        }
    }
];

export default graphStyles;