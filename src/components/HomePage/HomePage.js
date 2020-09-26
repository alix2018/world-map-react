import React, {useEffect, useState} from 'react';
import './HomePage.css';
import useChart from './useChart';

function HomePage() {
  useEffect(() => {
    const chartDiv = document.querySelector("#home-page").shadowRoot.querySelector("#chartdiv");
    useChart(chartDiv);
  }, []);

  return (
    <>
      <h1>You are logged in!</h1>
      <div id="chartdiv"></div>
    </>
  );
}

export default HomePage;