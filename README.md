# Belly-Button-Biodiversity
Interactive Visualizations and Dashboards




![web-mrsa-rex](https://user-images.githubusercontent.com/41865917/49971919-26bf0000-fefe-11e8-9a18-a1f13f87d365.jpg)

![image-20150722-1418-1fimw50](https://user-images.githubusercontent.com/41865917/49971872-02632380-fefe-11e8-8c11-84482715b4e0.jpg)


## Step 1 - Plotly.js

-- Use Plotly.js to build interactive charts for your dashboard.

** Create a PIE chart that uses data from your samples route (/samples/<sample>) to display the top 10 samples.

Use sample_values as the values for the PIE chart
Use otu_ids as the labels for the pie chart
Use otu_labels as the hovertext for the chart

Create a Bubble Chart that uses data from your samples route (/samples/<sample>) to display each sample.

Use otu_ids for the x values
Use sample_values for the y values
Use sample_values for the marker size
Use otu_ids for the marker colors
Use otu_labels for the text values

Display the sample metadata from the route /metadata/<sample>

Display each key/value pair from the metadata JSON object somewhere on the page

Update all of the plots any time that a new sample is selected.
You are welcome to create any layout that you would like for your dashboard. An example dashboard page might look something like the following.

Advanced Challenge Assignment (Optional)

The following task is completely optional and is very advanced.

Adapt the Gauge Chart from https://plot.ly/javascript/gauge-charts/ to plot the Weekly Washing Frequency obtained from the route /wfreq/<sample>
You will need to modify the example gauge code to account for values ranging from 0 - 9.
Update the chart whenever a new sample is selected
  
  
  
  Flask API

Use Flask API starter code to serve the data needed for your plots.


Test your routes by visiting each one in the browser.





Hints


Don't forget to pip install -r requirements.txt before you start your server.
Use console.log inside of your JavaScript code to see what your data looks like at each step.
Refer to the Plotly.js Documentation when building the plots.





![navelgazing-a](https://user-images.githubusercontent.com/41865917/49971820-caf47700-fefd-11e8-87a3-f37ff62ff3bf.jpg)
