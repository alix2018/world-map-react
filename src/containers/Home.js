import React from 'react';
import root from 'react-shadow';
import {navigate} from 'hookrouter';
import HomePage from '../components/HomePage/HomePage';
import styles from '../components/HomePage/HomePage.css';
import Cookies from '../helpers/cookies';

function Home() {
  if (!Cookies.getItem('accessToken')) {
    navigate('/');
  }
  return (
    <root.section id="home-page">
      <HomePage/>
      <style type="text/css">{styles}</style>
    </root.section>
  );
}

export default Home;