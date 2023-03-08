import React from "react";

// Individual component for displaying verb DOs and DON'Ts in /message.
const VerbExample = ({ badExample, goodExample }) => {
  return (
    <div>
      <div className="good__example">
        <span className="material-icons explanation__cross">close</span>
        <p className="badExample">{badExample}</p>
      </div>
      <div className="bad__example">
        <span className="material-icons explanation__check">done</span>
        <p className="goodExample">{goodExample}</p>
      </div>
      <hr className="horizontal__rule"></hr>
      <div style={{ paddingBottom: "1rem" }}></div>
    </div>
  );
};

export default VerbExample;
