function callchart(){
console.log(localStorage.whichChart);
	if(localStorage.whichChart=="LineChart"){
	google.load("visualization", "1", {packages:["corechart"]});
		google.setOnLoadCallback(drawLineChart);
		function drawLineChart() {
		console.log("inside the drawchart");
			var json = genGoogleJson();
			var data = new google.visualization.DataTable(json);
			var options = { title: 'Data Analysis using Line intervals',
				curveType: 'function',
				lineWidth: 4,
				vAxis: {title: 'Values'},
				intervals: { 'style':'line' },
				legend: 'none'};
			var chart = new google.visualization.LineChart(document.getElementById('chartcontainer'));
			chart.draw(data, options);
			console.log("after draw");
		}
	}
	else if(localStorage.whichChart=="SteppedAreaChart"){
	google.load("visualization", "1", {packages:["corechart"]});
		google.setOnLoadCallback(drawSteppedChart);
		function drawSteppedChart() {
		console.log("inside the drawchart");
			var json = genGoogleJson();
			var data = new google.visualization.DataTable(json);
			var options = { title: 'Data Analysis using Stepped Area Chart',
				vAxis: {title: 'Values'},
				isStacked: true};
			var chart = new google.visualization.SteppedAreaChart(document.getElementById('chartcontainer'));
			chart.draw(data, options);
			console.log("after draw");
		}	
	}
	else if(localStorage.whichChart=="AreaChart"){
	google.load("visualization", "1", {packages:["corechart"]});
		google.setOnLoadCallback(drawAreaChart);
		function drawAreaChart() {
		console.log("inside the drawchart");
			var json = genGoogleJson();
			var data = new google.visualization.DataTable(json);
			var options = { title: 'Data Analysis using Area Chart',
				vAxis: {title: 'Values'},
				};
			var chart = new google.visualization.AreaChart(document.getElementById('chartcontainer'));
			chart.draw(data, options);
			console.log("after draw");
		}	
	}
	else if(localStorage.whichChart=="Histogram"){
	google.load("visualization", "1", {packages:["corechart"]});
		google.setOnLoadCallback(drawHistogram);
		function drawHistogram() {
		console.log("inside the drawchart");
			var json = genGoogleJson();
			var data = new google.visualization.DataTable(json);
			var options = { title: 'Data Analysis using Histogram',
				vAxis: {title: 'Values'},
				legend: { position: 'none' },
				};
			var chart = new google.visualization.Histogram(document.getElementById('chartcontainer'));
			chart.draw(data, options);
			console.log("after draw");
		}	
	}
	else if(localStorage.whichChart=="ComboChart"){
		google.load("visualization", "1", {packages:["corechart"]});
		google.setOnLoadCallback(drawComboChart);
		function drawComboChart() {
			console.log("inside the drawchart");
			var json = genGoogleJson();
			var data = new google.visualization.DataTable(json);
			var options = { title: 'Data Analysis using Combo Chart',
				vAxis: {title: 'Values'},
				seriesType: "bars",
				series: {2: {type: "line"}}};
				
			var chart = new google.visualization.ComboChart(document.getElementById('chartcontainer'));
			chart.draw(data, options);
			console.log("after draw");
		}	
	}else if(localStorage.whichChart=="BubbleChart"){
		google.load("visualization", "1", {packages:["corechart"]});
		google.setOnLoadCallback(drawBubbleChart);
		function drawBubbleChart() {
			console.log("inside the drawchart");
			var json = genGoogleJson();
			var data = new google.visualization.DataTable(json);
			var options = { title: 'Data Analysis using Bubble Chart',
				vAxis: {title: 'Values'},
				hAxis: {title: 'Values'},
				seriesType: "bars",
				colorAxis: {colors: ['yellow', 'red', 'blue', 'green']},
				bubble: {
				  textStyle: {
					fontSize: 12,
					fontName: 'Times-Roman',
					color: 'green',
					bold: true,
					italic: true
				  }}
		};
				
			var chart = new google.visualization.BubbleChart(document.getElementById('chartcontainer'));
			chart.draw(data, options);
			console.log("after draw");
		}
	}
	else if(localStorage.whichChart=="ScatterPlot"){
		var options={
        chart: {
			renderTo: 'chartcontainer',
            type: 'scatter'
        },
        
		title: {
			text: 'Data Analysis using Scatter Plot'
		},
		xAxis: {
			categories: []
		},
		yAxis: {
			title: {
				text: 'Values'
			}
		},
		series: []
		};
		var nolines=localStorage.nolines;
		var headers = [];
		headers=JSON.parse(localStorage["selectedAttributes"]);
		var results = [];
		results = JSON.parse(localStorage["result"]); 
		for(var i=0;i<nolines;i++){	
			var series = {
			data: []
			};
			var lineno=i+1;
			series.name = "row"+lineno;
			console.log("name:"+series.name);
		for(var j=0;j<headers.length;j++){
				options.xAxis.categories.push(headers[j]);
				series.data.push(parseFloat(results[i][headers[j]]));
            }
			console.log("this is pushed:"+series.data);
            options.series.push(series);
		}
		
		var chart = new Highcharts.Chart(options);
		console.log(options.series);
	}
	else if(localStorage.whichChart=="BarChart"){
		var options={
        chart: {
			renderTo: 'chartcontainer',
            type: 'bar'
        },
        
		title: {
			text: 'Data Analysis using Bar Chart'
		},
		xAxis: {
			categories: []
		},
		yAxis: {
			title: {
				text: 'Values'
			}
		},
		series: []
		};
		var nolines=localStorage.nolines;
		var headers = [];
		headers=JSON.parse(localStorage["selectedAttributes"]);
		var results = [];
		results = JSON.parse(localStorage["result"]); 
		for(var i=0;i<nolines;i++){	
			var series = {
			data: []
			};
			var lineno=i+1;
			series.name = "row"+lineno;
			console.log("name:"+series.name);
		for(var j=0;j<headers.length;j++){
				options.xAxis.categories.push(headers[j]);
				series.data.push(parseFloat(results[i][headers[j]]));
            }
			console.log("this is pushed:"+series.data);
            options.series.push(series);
		}
		var chart = new Highcharts.Chart(options);
		console.log(options.series);
	}
	else if(localStorage.whichChart=="BubbleChart"){
		createBubbleJson();
	}
}

function genGoogleJson(){
console.log("generating json");
 var obj=new Object();
 var nolines=localStorage.nolines;
 console.log("lines "+nolines)
 obj.cols=[];
 obj.cols.push({"id":"","label":"Category","pattern":"","type":"string"});
 for(var i=1;i<=nolines;i++){
		obj.cols.push({"id":"","label":"row"+i,"pattern":"","type":"number"});
 }
 obj.rows=[];
var headers = [];
headers=JSON.parse(localStorage["selectedAttributes"]);
console.log("headers are " +headers);
var results = [];
results = JSON.parse(localStorage["result"]); 
console.log(results);
	for(var j=0;j<headers.length;j++){
	console.log("for loof for headers");
		var c=[];
		c.push({"v":headers[j],"f":null});
		for(var i=0;i<nolines;i++){
		console.log("for loof for rows");
			var attribute=headers[j]
			console.log(attribute);
			console.log(results[i]);
			var vals=results[i][headers[j]];
			console.log(vals);
			c.push({"v":parseInt(vals),"f":null});
		}
		
        obj.rows.push({"c":c});            
    }
	var text=JSON.stringify(obj);
	console.log(text);
 return text;
}

function createBubbleJson(){
		console.log("inside bubble");
		var selectedAttributes=[];
		//getting the array from locl storage
		selectedAttributes=JSON.parse(localStorage["selectedAttributes"]);
		var attributeList=JSON.parse(localStorage["headers"]);
		var result=JSON.parse(localStorage["result"]);
		alert(obj[1].A + " " + obj[1].B);
} 	