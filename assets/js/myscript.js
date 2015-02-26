var nolines;

//var csv is the CSV file with headers
function csvJSON(csv){

var lines=csv.split("\n");

var result = [];
//console.log("line is"+lines[0]);
var headers = [];
headers=lines[0].split(',');
var rv = {};
for (var i = 0; i < headers.length; ++i){
	rv[i] = headers[i];
	//console.log(rv);
}
rv1=JSON.stringify(rv);
//console.log(rv1);
var rv2;
for(var i=0;i<=rv1.length;i++){
	 rv2 = rv1.replace("\\r", "");
}
//console.log(rv2);
var rv3=JSON.parse(rv2);
//console.log(rv3);
//console.log(headers);
//setting the array in local storage
localStorage["headers"]=JSON.stringify(headers);

localStorage.nolines=lines.length-1;
nolines=lines.length-1;
//adding json objects in result array
for(var i=1;i<lines.length;i++){
		console.log(i);
	   var obj = {};
	   var currentline=lines[i].split(",");
			 var j;
	   for(j=0;j<headers.length;j++){
	   //console.log(currentline[j])
			obj[rv3[j]] = currentline[j]; 
	   }   
		result.push(obj);
}
//adding json object in localStorage
localStorage["result"]=JSON.stringify(result);
return JSON.stringify(result); //JSON
}

function upload(file) {

oFReader = new FileReader();
oFReader.onloadend = function() {
var json = csvJSON(this.result);
var totalCount=(nolines-1)*2;
for(var i=0;i<=totalCount;i++){
	 json = json.replace("\\r", "");
}
//attaching json in textbox
//var node=document.createTextNode(json);
//output.innerHTML = json;
//document.getElementById("csv").appendChild(node);
document.getElementById("chart").disabled=false;
console.log(json);
};
oFReader.readAsText(file);

}/*
function upload(file) {
           
oFReader = new FileReader();
oFReader.onloadend = function() {
var json = csvJSON(this.result);
//var totalCount=(nolines-1)*2;
//for(var i=0;i<=totalCount;i++){
	   json = json.replace("\\r", "");
//}
//var blob = new Blob([json], {type: 'application/json'});
//var url = URL.createObjectURL(blob);
//var node=document.createTextNode(json);
//output.innerHTML = json;
//document.getElementById("csv").appendChild(node);
console.log(json);
document.getElementById("chart").disabled=false;

};
oFReader.readAsText(file);

}
*/


 //function that gives charttype dynamically and opens model
 /*
function myFunction(id)
{
  var imgid = document.getElementById(id);
  var charttype = imgid.getAttribute("data-charttype");
  if(charttype == "barchart")
  {
	$("#modal").modal("show");
  }
  if(charttype == "piechart")
  {
	$("#modal").modal("show");
  }
  if(charttype == "bubblechart")
  {
	$("#modal").modal("show");
  }
  if(charttype == "areachart")
  {
	$("#modal").modal("show");
  }
}
*/
//generate checkbox dynamically for attributes
function attributeList(chart){
localStorage.whichChart=chart;
console.log(localStorage.whichChart);
$("#modal").modal("show");
		var attributeList=[];
		// generating new array to push html elements to UI through javascript functions
		var newHTML = [];
		//getting the array from locl storage
		attributeList=JSON.parse(localStorage["headers"]);					    	
		//alert("list length is"+attributeList.length);
		$.each(attributeList, function(index, value) {
			//adding checkbox and index as value of checkbox in html
			newHTML.push('<p><input type="checkbox" name="vehicle" class="c" id="checkbox'+index+'" value='+value+'>&nbsp;&nbsp;' + value + '<br/>'); 	
		});
		$("#attributeList").html(newHTML.join(""));		        	
	}
//displays attributes and calls bubble render function
function createChart(){
		$('#createChart').attr('disabled', 'disabled');	
		console.log("inside createChart");
		var selectedAttributes=[];
		var attributeList=JSON.parse(localStorage["headers"]);
		var totalattributes=attributeList.length;
		//selectedAttributes.push(document.getElementById("fileheaders").value);
		for (var i=0;i<totalattributes;i++) {
			var checkBoxObject = document.getElementById('checkbox'+i);
			if(checkBoxObject.checked == true){	
				console.log(checkBoxObject.value);
				selectedAttributes.push(checkBoxObject.value);
			}
			//console.log("value is selected attributes is"+selectedAttributes[i]);
		} 
		 localStorage["selectedAttributes"]=JSON.stringify(selectedAttributes);
		 		console.log("no of selected attributes are"+selectedAttributes.length);
		window.location='renderChart.html';	

	} 

