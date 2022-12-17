import React, { useState, useEffect } from 'react'
import Navbar2 from '../../components/navbar2/Navbar2';
import './message.css';

const Message = () => {

    // TODO: add an onFocus event to the textarea. When the text area is focused and if there's text, update the insights.

    const [message, setMessage] = useState('');

    useEffect(() => {
        const delayFunction = setTimeout(() => {
        console.log(message)
        // Send Axios request here
        }, 1500)

        return () => clearTimeout(delayFunction)
    }, [message])

  return (
    <div>
        <Navbar2/>
        <div className='message grey__bg'>
            <div className='columns'>
                <div className='left__column'>
                <div className="insights">
                    <div className="insight__container" id="paragraph__container">
                    <div className="insight">
                        <h3 className="insight__title">Paragraphs</h3>
                        <div className="insight__metrics">
                        <span className="material-icons insight__icon" id="check1">done</span>
                        <h3 className="insight__number" id="paragraphs">0</h3>
                        </div>
                    </div>
                    <div>
                        <div className="insight__slider">
                        <div className="slider__rectangle" id="paragraph__slider"></div>
                        </div>
                    </div>
                    <div className="slider__gradient paragraph__gradient"></div>
                    </div>
                    <div className="insight__container" id="question__container">
                    <div className="insight">
                        <h3 className="insight__title">Questions</h3>
                        <div className="insight__metrics">
                        <span className="material-icons insight__icon" id="check2">done</span>
                        <h3 className="insight__number" id="questions">0</h3>
                        </div>
                    </div>
                    <div>
                        <div className="insight__slider">
                        <div className="slider__rectangle" id="question__slider"></div>
                        </div>
                    </div>
                    <div className="slider__gradient question__gradient"></div>
                    </div>
                    <div className="insight__container" id="grade__container">
                    <div className="insight">
                        <h3 className="insight__title">Grade Level</h3>
                        <div className="insight__metrics">
                        <span className="material-icons insight__icon" id="check3">done</span>
                        <h3 className="insight__number" id="grade">0</h3>
                        </div>
                    </div>
                    <div>
                        <div className="insight__slider">
                        <div className="slider__rectangle" id="grade__slider"></div>
                        </div>
                    </div>
                    <div className="slider__gradient grade__gradient"></div>
                    </div>

            </div>
                    <textarea placeholder='Type your invitation note here' maxLength="300" id='textBox' value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>
                    <div className='left__column-three'>
                        <p className='character__counter'>300 / 300</p>
                        <button className='navbar__button copy__button'>
                            <p className='navbar__button-text'>Copy</p>
                        </button>
                    </div>
                </div>
            <div className='right__column'>
                <div className='insights'>
                    <div className="insight__container" id="wording__container">
                        <div className="insight">
                            <h3 className="insight__title">Wording</h3>
                            <div className="insight__metrics">
                            <span className="material-icons insight__icon" id="check4">done</span>
                            <span className="material-symbols-outlined insight__warning" id="warning">warning</span>
                            <h3 className="insight__number" id="words">0</h3>
                            </div>
                        </div>
                        <div>
                            <div className="insight__slider">
                            <div className="slider__rectangle" id="word__slider"></div>
                            </div>
                        </div>
                        <div className="slider__gradient word__gradient"></div>
                    </div>
                </div>
                <div className="insights__explanation">
                    <div className="explanation__container" id="paragraph__explanation">
                        <h2 className="insight__title">Paragraphs</h2>
                        <p className='explanation__text'>
                        Break your message into three components: a greeting, message body, and a farewell.
                        The brain likes to be presented with three choices.
                        Anything higher leads to confusion.
                        </p>
                        <p className="learn__more"><a target="_blank" rel="noopener noreferrer" href="https://rocketstart.careers">Learn more</a></p>
                    </div>
                    <div className="explanation__container" id="question__explanation">
                        <h2 className="insight__title">Question Count</h2>
                        <p className='explanation__text'>
                        Include a call to action in your message.
                        Messages with questions receive higher reply rates.
                        Your recipient should learn why you're interested in connecting with them.
                        </p>
                        <p className="learn__more"><a target="_blank" rel="noopener noreferrer" href="https://rocketstart.careers">Learn more</a></p>
                    </div>
                    <div className="explanation__container" id="grade__explanation">
                        <h2 className="insight__title">Grade Level</h2>
                        <p className='explanation__text'>
                        Make your message easy to read.
                        Messages with short sentences and accessible words receive higher reply rates.
                        Understanding your intent should be effortless.
                        </p>
                        <p className="learn__more"><a target="_blank" rel="noopener noreferrer" href="https://rocketstart.careers">Learn more</a></p>
                    </div>
                    <div className="explanation__container" id="wording__explanation">
                        <h2 className="insight__title">Wording</h2>
                        <p className='explanation__text'>
                        Avoid adverbs and weak verbs.
                        You'll save characters, which allows you to write more.
                        Any ineffective words will be detected and displayed below.
                        </p>
                        <h3 className="insight__title" id="adverbsHeader">Please remove adverbs:</h3>
                        <p className="red italicBold"id="flaggedAdverbs"></p>
                        <h3 className="insight__title" id="verbsHeader">Please remove weak verbs:</h3>
                        <p className="red italicBold"id="flaggedVerbs"></p>
                        <h4 id="verbExamplesHeading">Example:</h4>
                        <div id="verbExamples" className="verb__example"></div>
                        <p className="learn__more"><a target="_blank" rel="noopener noreferrer" href="https://rocketstart.careers">Learn more</a></p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Message