import React, { useState } from "react";
import "./question.css";

// Invididual question in the Q&A section.
const Question = ({ question, answer }) => {
  const [btnState, setBtnState] = useState(false); // If the quesiton is open or sclosed
  const [iconState, setIconState] = useState(false); // If the icon is a plus or minus
  const [borderState, setBorderState] = useState(false); // If the border is grey or blue

  // Class names for above state
  let toggleClass = btnState ? "visible" : " hidden";
  let accordion = iconState ? "remove" : "add";
  let borderClass = borderState ? "blue" : "";

  function handleClick() {
    setBtnState((btnState) => !btnState);
    setIconState((iconState) => !iconState);
    setBorderState((borderState) => !borderState);
  }

  return (
    <div className={`question__container ${borderClass}`}>
      <div className="question__content-q">
        <p className="question__text-q">{question}</p>
        <span
          className="material-symbols-outlined question__add"
          onClick={handleClick}
          aria-label="expand-question"
        >
          {accordion}
        </span>
      </div>
      <div className={`question__content-a ${toggleClass}`}>
        <p className="question__text-a">{answer}</p>
      </div>
    </div>
  );
};

export default Question;
