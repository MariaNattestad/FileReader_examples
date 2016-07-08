
// Using JQuery

var raw_data;
var reader = new FileReader();
var upload_box = $("#upload_file");

upload_box.change(function() {reader.readAsText($(this)[0].files[0]);});

reader.onload = function(event) {
	raw_data = event.target.result;
	parseData(raw_data);
}

function parseData(raw_data) {
	$("#show_contents").html(raw_data);
}
