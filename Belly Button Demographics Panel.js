<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Belly Button Biodiversity</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
</head>

<div class="well">
    <h5>Test Subject ID NO:</h5>
    <select id="selDataset"><</select>
<div>
<div class="panel panel-primary">
 <div class="panel-heading">
     <h3 class="panel-title">Demographic Info</h3>
</div>
<div id="sample-metadata" class="panel-body"><</div>
<div>

function init() {
  var selector = d3.select("#selDataset");

  d3.json("samples.json").then((data) => {
    console.log(data);
    var sampleNames = data.names;
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });
})}

init();  

<select id="dropdownMenu">
    <option value="dataset1">DataSet1</option>
    <option value="dataset2">DataSet2</option>
  </select>

<select id="selDataset" onchange="optionChanged(this.value)"></select>

function optionChanged(newSample) {
  console.log(newSample);
}

function optionChanged(newSample) {
  buildMetadata(newSample);
  buildCharts(newSample);
}

function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    var PANEL = d3.select("#sample-metadata");

    PANEL.html("");
    PANEL.append("h6").text(result.location);
  });
}