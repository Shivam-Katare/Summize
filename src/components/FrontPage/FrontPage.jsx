import React from 'react';
import GIRL_IMAGE from './girl.png';
import NavBar from '../NavBar/NavBar';
import './FrontPage.css';

const FrontPage = () => {
  return (
    <>
      <NavBar />
      <div className="intro-page">
        <h1 className="page-title">SUMMIZE</h1>
        <div className="summary-container">
          <div className="tag-image-container">
            <div className="tagline">
              <p className="tagline-part-1">Simplify</p>
              <br />
              <p className="tagline-part-2">the complex!</p>
              <br />
              <p className="app-summary">
                "Summarize" + "Eyes", Summize simplifies complex and lengthy text into a concise summary, saving you valuable time and helping you quickly digest important information.
              </p>
            </div>
            <div className="image-container">
              <img src={GIRL_IMAGE} alt="girl" className="girl-image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrontPage;
