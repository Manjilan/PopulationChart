import React, { useState } from "react";
import Chart from "./Chart";

export default function App() {
  const [populationData, setPopulationData] = useState();
  if (!populationData) {
    fetch("https://api.datausa.io/api?show=geo&sumlevel=nation&required=pop")
      .then(response => response.json())
      .then(result => {
        setPopulationData(result.data);
      });
  }
  return populationData ? (
    <div>
      <h1>Population of United States</h1>
      <Chart populationData={populationData} />
    </div>
  ) : (
    <h1>Data Not Found</h1>
  );
}
