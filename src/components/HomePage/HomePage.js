import React, {useEffect} from 'react';
import './HomePage.css';
import useChart from './useChart';

function HomePage() {
  useEffect(() => {
    const chartDiv = document.querySelector('#home-page').shadowRoot.querySelector('#chartdiv');
    useChart(chartDiv); // eslint-disable-line react-hooks/rules-of-hooks
  }, []);

  return (
    <>
      <div id="chartdiv"/>
    </>
  );
}

export default HomePage;