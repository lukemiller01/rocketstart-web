import React from 'react';
import './insight.css'

const Insight = ({
  name,
  active,
  setExplanation,
  slider,
  check,
  number,
  warning,
}) => {
  return (
    <div className="outer__container">
      <div
        className={`insight__container ${active ? " active__rs" : ""}`}
        onClick={() => setExplanation(name)}
        aria-label={`${name}__insight`}
      >
        <div className="insight">
          <h3 className="insight__title">{name}</h3>
          <div className="insight__metrics">
            <span
              className={`material-icons insight__icon ${
                check ? " message__flex" : " message__hide"
              }`}
              aria-label='checkmark'
            >
              done
            </span>
            <span
              className={`material-symbols-outlined insight__warning ${
                warning ? " message__flex" : " message__hide"
              }`}
              id="warning"
            >
              warning
            </span>
            <h3 className="insight__number" aria-label={`${name}`}>
              {number}
            </h3>
          </div>
        </div>
        <div>
          <div className="insight__slider">
            <div
              className="slider__rectangle"
              style={{ left: slider }}
            ></div>
          </div>
        </div>
        <div className={`slider__gradient ${name}__gradient`}></div>
      </div>
    </div>
  );
};

export default Insight;
