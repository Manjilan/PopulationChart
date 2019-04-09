import React, { useState } from "react";
import { Bar } from "react-chartjs-2";

export default populationData => {
  let [chartdatasets, setChartDatasets] = useState();
  if (!chartdatasets) {
    let info = {
      labels: [],
      datasets: [
        {
          label: "Population",
          data: [],
          backgroundColor: "#6b6ec6"
        }
      ]
    };
    populationData.populationData.map(year => {
      info.labels.push(year[0]);
      info.datasets[0].data.push(year[2]);
    });
    console.log(info);
    setChartDatasets(info);
  }
  return chartdatasets ? (
    <div id="canvas">
      <Bar data={chartdatasets} options={{}} />
    </div>
  ) : (
    <h1>Loading</h1>
  );
};
