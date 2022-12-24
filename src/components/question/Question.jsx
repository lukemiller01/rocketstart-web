import React, { useState } from 'react';
import './question.css';

const Question = ({question, answer}) => {

  const [ btnState, setBtnState ] = useState(false);
  const [iconState, setIconState ] = useState(false);
  const [ borderState, setBorderState ] = useState(false);

  function handleClick() {
    setBtnState(btnState => !btnState);
    setIconState(iconState => !iconState);
    setBorderState(borderState => !borderState);
  }

  let toggleClass = btnState ? 'visible' : ' hidden';
  let accordion = iconState ? 'remove' : 'add';
  let borderClass = borderState ? 'blue' : '';

  return (
    <div className={`question__container ${borderClass}`}>
        <div className='question__content-q'>
            <p className='question__text-q'>{question}</p>
            <span className="material-symbols-outlined question__add" onClick={handleClick}>{accordion}</span>
        </div>
        <div className={`question__content-a ${toggleClass}`}>
            <p className='question__text-a'>{answer}</p>
        </div>
    </div>
  )
}

export default Question