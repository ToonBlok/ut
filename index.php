<!DOCTYPE HTML>
<html>
	<head>
		<meta charset="UTF-8"> 
		<title>SMA</title>

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

		<script src="data_getter.js"></script>
		<script src="chart.js"></script>

		<script>
			var stakeholder_detailinfo = <?php 
				echo file_get_contents('http://www3.llinxx.com:3150/stakeholderhh/stakeholders?fields=*');  
			?>  
			var project_name = <?php
				echo file_get_contents('http://www3.llinxx.com:3150/stakeholderhh/case');
			?>

			project_name = project_name[0].label;

			var data_getter = new sma_data_getter();
			var data = data_getter.get_data();
			var chart = new sma_chart();

			chart.add_piechart();
			chart.add_legend();
			chart.add_categories();
			chart.add_project_circle(project_name);

			//var test_data_getter = new sma_data_getter();
			//get_sma_data_getter = ()=> test_data_getter;
			//module.exports = {get_sma_data_getter}
		</script>

		<script src="main.js"></script>

	</body> 
</html>
