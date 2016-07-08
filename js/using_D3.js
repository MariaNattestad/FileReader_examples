
// Using D3

var raw_data;
var reader = new FileReader();
var upload_box = d3.select("#upload_file");

upload_box.on("change",function() {	reader.readAsText(this.files[0]);});

reader.onload = function(event) {
	raw_data = event.target.result;
	parseData(raw_data);
}

function parseData(raw_data) {
	d3.select("#show_contents").html(raw_data);
}
