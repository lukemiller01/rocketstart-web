import React from "react";
import { HashLink } from "react-router-hash-link";
import VerbExample from "../../components/verbExample/VerbExample";
import './explanation.css';

const Explanation = ({ visible, name, hash, target, message, adverbsHeader, flaggedAdverbs, verbsHeader, flaggedVerbs, verbProp }) => {
  return (
    <div
      className={`explanation__container ${
        visible ? " message__block" : " message__hide"
      }`}
    >
      <div className="modified__explanation">
        <h3 className="insight__title">{name}</h3>
        <div className="explanation__aim">
          <span className="material-icons aim__icon">done</span>
          <h3 className="insight__title">{target}</h3>
        </div>
      </div>
      <p className="explanation__text">{message}</p>
      <h3
        className={`insight__title ${
          adverbsHeader ? " message__block" : " message__hide"
        }`}
      >
        Please remove adverbs:
      </h3>
      <p
        className={`red italicBold ${
          adverbsHeader ? " message__block" : " message__hide"
        }`}
        id="flaggedAdverbs"
      >
        {flaggedAdverbs}
      </p>
      <h3
        className={`insight__title ${
          verbsHeader ? " message__block" : " message__hide"
        }`}
        id="verbsHeader"
      >
        Please remove weak verbs:
      </h3>
      <p
        className={`red italicBold ${
          verbsHeader ? " message__block" : " message__hide"
        }`}
        id="flaggedVerbs"
      >
        {flaggedVerbs}
      </p>
      <h3
        className={`verb__examples-heading ${
          verbsHeader ? " message__block" : " message__hide"
        }`}
        id="verbExamplesHeading"
      >
        Example:
      </h3>
      <div
        id="verbExamples"
        className={`verb__examples-heading ${
          verbsHeader ? " message__block" : " message__hide"
        }`}
      >
        { verbProp ? verbProp.map((item, i) => (
          <VerbExample
            key={i}
            goodExample={item.goodExample}
            badExample={item.badExample}
          />
        )) : null }
      </div>
      <HashLink
        to={`/blog/how-I-landed-my-job-at-spacex#${hash}`}
        target="_blank"
        rel="noopener"
      >
        <p className="learn__more">Learn More</p>
      </HashLink>
    </div>
  );
};

export default Explanation;
