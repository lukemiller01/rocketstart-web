import React, { useState} from 'react';
import './question.css';

const Question = ({question, answer}) => {

  const [ btnState, setBtnState ] = useState(false);

  function handleClick() {
    setBtnState(btnState => !btnState)
  }

  let toggleClass = btnState ? null : ' hidden';

  return (
    <div className='question__container'>
        <div className='question__content'>
            <p className='question__text-q'>{question}</p>
            <span className="material-symbols-outlined question__add" onClick={handleClick}>add</span>
        </div>
        <div className={`question__content ${toggleClass}`}>
            <p className='question__text-a'>{answer}</p>
        </div>
    </div>
  )
}

export default Question