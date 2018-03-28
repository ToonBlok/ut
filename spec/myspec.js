const d3 = require("d3");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
// Setup fake page
const dom = new JSDOM(`
<!DOCTYPE html>
<html>
	<head>
	</head>
	<body>
	</body>
</html>
`);

var sma_chart = require('../chart.js');

describe('chart tests', ()=>
{

	it('test', ()=>
	{
		var WIDTH = 500;
		var HEIGHT = 500;

		var svg = d3.select(dom.window.document.body)
			.append('svg')
			.attr('width', WIDTH)
			.attr('height', HEIGHT)
			.append('g')
			.attr('transform', 'translate(' + (WIDTH / 2) +  ',' + (HEIGHT / 2) + ')');

		var chart = new sma_chart(svg, d3);
		chart.add_project_circle("Boont");
		console.log(dom.serialize());
	});

});

