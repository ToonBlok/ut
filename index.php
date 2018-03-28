<!DOCTYPE HTML>
<html>
	<head>
		<meta charset="UTF-8"> 
		<title>UT</title>

		<style>

			.legend {
				font-size: 12px;
			}
			rect {
				stroke-width: 2;
			}

		</style>

		<script src="https://d3js.org/d3.v4.min.js"></script>

	</head>
	<body>

		<div id="chart" align="center"></div>

		<script src="chart.js"></script>

		<script>
			var a = barChart();
			a.render();

		</script>

	</body> 
</html>
