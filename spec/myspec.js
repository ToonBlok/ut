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
		<script src="chart.js"></script>
		<p>Hello world</p>
	</body>
</html>
`);

var sma_chart = require('../chart.js');


describe('chart tests', ()=>
{

	//it('include', ()=>
	//{
	//	dom.window.document.write('<script type="text/javascript" src="chart.js"></script>');
	//}

	it('Get p contents', ()=>
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
		//console.log(dom.window.document.querySelector("p").textContent); // "Hello world"
	});

	it('Add svg...', ()=>
	{
		//console.log(dom.window.document.querySelector("p").textContent); // "Hello world"
		var WIDTH = 500;
		var HEIGHT = 500;

		var svg = d3.select(dom.window.document.body)
			.append('svg')
			.attr('width', WIDTH)
			.attr('height', HEIGHT)
			.append('g')
			.attr('transform', 'translate(' + (WIDTH / 2) +  ',' + (HEIGHT / 2) + ')');
	});

});

