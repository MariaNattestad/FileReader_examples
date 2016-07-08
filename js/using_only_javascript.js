
// standard javascript with no Jquery or D3

var raw_data;
var reader = new FileReader();
var upload_box = document.getElementById("upload_file");

upload_box.addEventListener('change', function() { reader.readAsText(this.files[0]);});

reader.onload = function(event) {
	raw_data = event.target.result;
	parseData(raw_data);
}

function parseData(raw_data) {
	document.getElementById("show_contents").innerHTML = raw_data;
}
