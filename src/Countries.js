import React, { useState, useEffect } from "react";
import axios from "axios";

function Countries() {
  const [rawData, setRawData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      console.log("Before API call...", rawData.length);
      const result = await axios({
        method: "get",
        url: "https://restcountries.eu/rest/v2/all",
        responseType: "json"
      });
      await console.log(result.data.length);
      await setRawData(result.data);
      await console.log(rawData.length);
      return result.data;
    }

    //setRawData(fetchData());   // this fails as fetchData returns a promise.
    fetchData();
  }, []);

  return (
    <div className="countryContainer">
      <h2>Countries Raw Data</h2>
      There are {rawData.length} countries in the search results...
    </div>
  );
}

export default Countries;
