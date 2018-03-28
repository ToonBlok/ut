"use strict"

// Required for tests, but gives error in browser
var d3 = require("d3");
//require(['d3'], function (foo) {
//    //foo is now loaded.
//});
//
const WIDTH = 1500;
const HEIGHT = 900;
const RADIUS = Math.min(WIDTH, HEIGHT) / 2;
const LEGEND_RECT_SIZE = 20;
const LEGEND_SPACING = 4;
const LEGEND_X = WIDTH - 950;
//var color = d3.scaleOrdinal(d3.schemeCategory20b); 


class sma_chart
{
	constructor(svg, fake_d3)
	{
		if (svg == undefined) {
			this.svg = d3.select('#chart')
				.append('svg')
				.attr('width', WIDTH)
				.attr('height', HEIGHT)
				.append('g')
				.attr('transform', 'translate(' + (WIDTH / 2) +  ',' + (HEIGHT / 2) + ')');
		} else {
			this.svg = svg;
			//var d3 = fake_d3;
			console.log("Both are defined");
		}	

		this.arc = d3.arc()
			.innerRadius(0)
			.outerRadius(RADIUS);

		this.pie = d3.pie()
			.value(function(d){ return d.stakeholders.length;})
			.sort(null);
	}

	add_piechart()
	{
		var paths = this.svg.selectAll("path")
			.data(chart.pie(data))
			.enter();

		paths.append("path")
			.attr("id", function(d,i) { return "pieChart"+i; })
			.attr("d", chart.arc)
			.attr('fill', function(d, i) { return color(i) } );
			
			
	}

	add_project_circle(project_name)
	{
		var circle = this.svg.append("circle")
			.attr("cx", 0)
			.attr("cy", 0)
			.attr("r", 100)
			.style("stroke", "black")
			.style("fill", "white");
				 
		this.svg.append('text')
			.attr('x', -100)
			.attr('y', 0)
			.text(project_name);
	}

	add_legend()
	{
		var legend = this.svg.selectAll('.legend')
			.data(color.domain())
			.enter()
				.append('g')
				.attr('class', 'legend')
				.attr('transform', function(d, i) {
					var height = LEGEND_RECT_SIZE + LEGEND_SPACING;
					var offset =  height * color.domain().length / 2;
					var horz = -2 * LEGEND_RECT_SIZE;
					var vert = i * height - offset;
					return 'translate(' + horz + ',' + vert + ')';
				});
			
		legend.append('rect')
			.attr('x', LEGEND_X)
			.attr('width', LEGEND_RECT_SIZE)
			.attr('height', LEGEND_RECT_SIZE)
			.style('fill', color)
			.style('stroke', color);

		legend.append('text')
			.attr('x', LEGEND_X + (LEGEND_RECT_SIZE + LEGEND_SPACING))
			.attr('y', LEGEND_RECT_SIZE - LEGEND_SPACING)
			.text(function(d) { return d; });

	}

	add_categories()
	{
		var maxCategoryLength = 19;
		this.svg.selectAll(".categoryText")
			.data(data)
			.enter()
				.append("text")
				.attr("class", "categoryText")
				.attr("x", 5)
				.attr("dy", 18)
				.append("textPath")
				.attr("xlink:href",function(d,i){return "#pieChart"+i;})
				.text(function(d){return d.cat.length > maxCategoryLength ?
				d.cat.substring(0, maxCategoryLength - 3) + "..." : d.cat;});
	}
}

//module.exports = function()
//{
//	var chart = new sma_chart();
//	return chart;
//}
//module.exports = 'Hello world';
// Export node module.
if ( typeof module !== 'undefined' && module.hasOwnProperty('exports') )
{
    module.exports = sma_chart;
}
