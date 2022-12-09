import React from 'react'
import './questions.css'
import  { Question } from '../../components';

const questionData = [
    {
        question: 'Is Rocketstart free?',
        answer: 'Yes.',
    },
    {
        question: 'Does Rocketstart store my LinkedIn invitation notes?',
        answer: 'No. Rocketstart does not store any LinkedIn profile data.',
    },
    {
        question: 'When will Rocketstart be supported on other browsers?',
        answer: 'Currently, there is no plan to expand support past Google Chrome. If you\'d like to use Rocketstart on another browser, please contact us voicing your interest.',
    },
    {
        question: 'Is Rocketstart available on mobile applications?',
        answer: 'No. Mobile application extensions are not currently available on major operating systems.',
    },
]

const Questions = () => {
  return (
    <div className='questions'>
        <div className='question__header'>
            <h4 >Frequently Asked Questions</h4>
            <p className='question__paragraph'>Can't find what you're looking for? Feel free to contact us.</p>
        </div>
        <div className='question__list'>
            {questionData.map((item, index) => (
            <Question question={item.question} answer={item.answer} key={item.question + index} />
            ))}
        </div>
    </div>
  )
}

export default Questions