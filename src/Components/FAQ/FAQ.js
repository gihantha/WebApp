import React, { useState } from "react";

import "./FAQ.css";
import data from "../../Assets/Data/Data";

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAnswer = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="FAQ">
      <h3>Frequently asked questions</h3>
      {data.map((item, index) => (
        <div className="QA-container">
          <div key={index} className="qa">
            <div className="question">{item.question}</div>
            <button className="toggle-btn" onClick={() => toggleAnswer(index)}>
              {expandedIndex === index ? "-" : "+"}
            </button>
            {/* <div className="answer">{item.answer}</div> */}
          </div>
          {expandedIndex === index && (
            <div className="answer">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
