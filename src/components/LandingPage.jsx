import React, { useState } from "react";
import Footer from "./Footer/Footer";
import "./LandingPage.css";

function LandingPage({ doStuff, setInput, result, isLoading }) {
  const [text, setText] = useState("");

  const MAX_CONTEXT_LENGTH = 4080;

  const handleChange = (event) => {
    const input = event.target.value;
    if (input.length <= MAX_CONTEXT_LENGTH) {
      setInput(input);
      setText(input);
    } else {
      // Only set the state to the allowed characters
      setInput(input.slice(0, MAX_CONTEXT_LENGTH));
      setText(input.slice(0, MAX_CONTEXT_LENGTH));
    }
  };

  return (
    <div className="summize-summary-container">
      <form className="text-box">
        <textarea
          placeholder="Enter Your Text |  Text should be more 10 words | Don't enter any invalid text or symbols."
          required
          onChange={handleChange}
          value={text}
          id="style-4"
        />
      </form>
      <div style={{ height: "17rem" }} className="answer-me">
        <button className="answer-me-btn" onClick={doStuff} disabled={text === ""}>
          Summarize it
        </button>
      </div>
      <div className="result-container" id="style-4">
        <div className="result-text">
          {isLoading ? (
            "Summerizing...😊"
          ) : (
            result.length > 0 && (
              <div>
                {result.split("\n").map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            )
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
