import React from 'react';
import Header from '../Header/Header';
import Contents from '../Contents/Contents';
import Footer from '../Footer/Footer';
import './Main.css';

function Main() {
  return (
    <div className="layout">
      <Header />
      <Contents />
      <Footer />
    </div>
  );
}

export default Main;