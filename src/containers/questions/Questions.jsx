import React from 'react'
import './questions.css'
import  { Question } from '../../components';

const questionData = [
    {
        question: 'Is Rocketstart free?',
        answer: 'Rocketstart\'s Message Analysis is free. Rocketstart\'s Contact Finder has tiered pricing. See the Pricing section for details.',
    },
    {
        question: 'How is Rocketstart data sourced?',
        answer: 'Rocketstart\'s source data is publicly available and processed transparently. See our Privacy Policy for more.',
    },
    {
        question: 'Who should use Rocketstart?',
        answer: 'Any job seeker or professional looking to expand their network can benefit from Rocketstart.',
    },
    {
        question: 'Is Rocketstart available as a Browser Extension?',
        answer: 'A Browser Extension for Rocketstart\'s Contact Finder is coming soon. Please sign up for alerts to be the first to know!',
    },
]

const Questions = () => {
  return (
    <div className='questions'>
        <div className='question__header'>
            <h4 >Frequently Asked Questions</h4>
            <p className="question__paragraph">Can't find what you're looking for? Feel free to <a target="_blank" rel="noopener noreferrer" className='mail__to' href="mailto:luke@rocketstart.careers">contact us.</a></p>
            {/* <p className='question__paragraph'>Can't find what you're looking for? Feel free to contact us.</p> */}
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