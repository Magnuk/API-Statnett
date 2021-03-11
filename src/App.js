import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const [featuresState, setFeaturesState] = useState([]);
  const [metaDataState, setMetaData] = useState({});
  const [bboxState, setBboxState] = useState([]);

  //Method to fetch data from the API
  //Await the response, and set the data in local states only if we have response
  async function fetchData() {
    const response = await fetch(
      "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_hour.geojson",
      {
        method: "GET",
      }
    );

    const jsonResponse = await response.json();

    if (jsonResponse && jsonResponse.metadata.count>0) {
      const { features, metadata, bbox } = jsonResponse;

      setFeaturesState(features);
      setMetaData(metadata);
      setBboxState(bbox);
      return jsonResponse;
    }
  }
 

  useEffect(() => {
    fetchData();
  }, []);

  // if(jsonResponse.metadata.count>0){}
  // else{}

  return (
    <div className="App">
      <h1 style={{ marginBottom: 60 }}>{metaDataState.title}</h1>
      <p style={{ marginBottom: 60 }}>
        Number of earthquakes: {metaDataState.count}
      </p>
      {featuresState.map((features) => {
        return (
          <div style={{ marginBottom: 60 }}>
            <p>Location: {features.properties.place}</p>
            <p>Magnitude: {features.properties.mag}</p>
            <p>Time: {features.properties.time}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;