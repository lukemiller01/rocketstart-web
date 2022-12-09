import React from 'react'
import './question.css'

const Question = ({question, answer}) => {
  return (
    <div className='question__container'>
        <div className='question__content'>
            <p className='question__text'>{question}</p>
            <span className="material-symbols-outlined">add</span>
        </div>
        <div className='question__content hidden'>
            <p className='question__text'>{answer}</p>
        </div>
    </div>
  )
}

export default Question