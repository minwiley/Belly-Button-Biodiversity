function buildMetadata(sample) {

  // @TODO: Complete the following function that builds the metadata panel
  // Use `d3.json` to fetch the metadata for a sample
    var url = `/metadata/${sample}`;

    // Use d3 to select the panel with id of `#sample-metadata`
    d3.json(url).then(function(sample){
      var sampleMetadata = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
      sampleMetadata.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new tags for each key-value in the metadata.
      Object.entries(sample).forEach(([key, value]) => {
        sampleMetadata.append("p");
        sampleMetadata.text(`${key} : ${value}`);
});
  }
)};

//     // BONUS: Build the Gauge Chart
//     buildGauge(data.WFREQ);
// }

function buildCharts(sample) {

  // @TODO: Use `d3.json` to fetch the sample data for the plots
    var url = `/samples/${sample}`;
    d3.json(url).then(function(data){

    // @TODO: Build a Bubble Chart using the sample data
      var sample_values = data.sample_values;
      // console.log(sample_values);
      var otu_ids = data.otu_ids;
      // console.log(otu_ids);
      var labels = data.labels;
      // console.log(labels);

      var trace1 = {
        x: otu_ids,
        y: sample_values,
        hovermode : 'closest',
        type: 'scatter',
        mode: 'markers',
        marker: {
          color : otu_ids,
          colorscale : 'Rainbow',
          size: sample_values,
        }
      };

      var data = [trace1];

      var layout = {
        title: 'bubbly',
        showlegend: false,
        height: 800,
        width: 1200
      };

      Plotly.newPlot('bubble', data, layout);


    // @TODO: Build a Pie Chart
// HINT: You will need to use slice() to grab the top 10 sample_values, otu_ids, & labels (10ea).
      var data = [{
            values: sample_values.splice(0, 10),
            labels: otu_ids.splice(0, 10),
            text: sample_values.splice(0,10),
            type: 'pie'
          }];
          Plotly.newPlot('pie', data);
        });    
}

function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("/names").then((sampleNames) => {
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    const firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();