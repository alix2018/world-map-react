import React from 'react';
import root from 'react-shadow';
import HomePage from '../components/HomePage/HomePage';
import styles from '../components/HomePage/HomePage.css';

function Home() {
  return (
    <root.section id="home-page">
      <HomePage/>
      <style type="text/css">{styles}</style>
    </root.section>
  );
}

export default Home;