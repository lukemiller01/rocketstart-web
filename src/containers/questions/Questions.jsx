import React from 'react'
import './questions.css'
import  { Question } from '../../components';

const questionData = [
    {
        question: 'Is Rocketstart free?',
        answer: 'Yes.',
    },
    {
        question: 'How is Rocketstart data sourced?',
        answer: 'Rocketstart\'s source data is publicly available and processed transparently. Please see our Privacy Policy for more.',
    },
    {
        question: 'Who should use Rocketstart?',
        answer: 'Any job seeker or professional looking to expand their professional network can benefit from Rocketstart.',
    },
    {
        question: 'Is Rocketstart available as a Chrome Extension?',
        answer: 'Rocketstart\'s message analysis tool cannot be packaged into a Chrome Extension due to LinkedIn\'s User Agreement.',
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