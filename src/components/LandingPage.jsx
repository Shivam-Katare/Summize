import React, { useState } from "react";
import Footer from "./Footer/Footer";
import "./LandingPage.css";

function LandingPage({ doStuff, setInput, result, isLoading }) {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    const inputValue = event.target.value.trim();
    setInput(inputValue);
    setText(inputValue);
  };

  const renderResult = () => {
    if (isLoading) {
      return <div className="result-text">Summerizing...😊</div>;
    }

    if (result.length > 0) {
      return (
        <div className="result-text">
          <h3>Summary:</h3>
          {result.split("\n").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <div className="summize-summary-container">
      <form className="text-box">
        <textarea
          placeholder="Enter Your Text |  Text must be more 10 words | Don't enter any invalid text or symbols."
          required
          onChange={handleChange}
          id="style-4"
        />
      </form>
      <div style={{ height: "17rem" }} className="answer-me">
        <button
          className="answer-me-btn"
          onClick={doStuff}
          disabled={!text || text.length < 10}
        >
          Summarize it
        </button>
      </div>
      <div className="result-container" id="style-4">
        {renderResult()}
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
