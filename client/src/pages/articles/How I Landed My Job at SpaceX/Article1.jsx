import React from 'react';
import { Navbar } from '../../../components';
import { useOutletContext } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../articles.css';

import stepOne from '../../../assets/articleOne1.png';
import stepTwo from '../../../assets/articleOne2.png';
import stepThree from '../../../assets/articleOne3.png';
import stepFour from '../../../assets/articleOne4.png';
import falconHeavy from '../../../assets/falconHeavy.jpeg'
import messageAnalysis from '../../../assets/MessageAnalysis.png'

import { Link } from 'react-router-dom';
import { CallToAction, Footer } from '../../../containers';

const Article1 = () => {
    
    // Setting the navbar based on if the user is logged in
    const { navOne, navTwo, logoURL } = useOutletContext();

    window.umami.trackView('/blog/how-I-landed-my-job-at-spacex');

  return (
    <div>
        <Helmet>
            <title>Blog · Rocketstart</title>
        </Helmet>
        <Navbar navOne={navOne} navTwo={navTwo} logoURL={logoURL}/>

        <div className='article'>
            <div className='article__content-header__container'>
                <h1 className='article__content-header'>How I Landed My Job at SpaceX with a LinkedIn Message</h1>
                <p className='article__content-header'>Last Updated: January 17 2023</p>
            </div>

            <div className='article__content-container'>
                <div className='article__content'>

                    <h4 className='article__content-subheader'>Introduction</h4>
                    <p className='article__paragraph'>
                        I was a senior in high school when SpaceX launched Falcon Heavy. With a graduation date barreling towards me, I couldn't find what I wanted to pursue in life. I researched common career paths. I scrolled through dull university webpages. Everything I came across felt too abstract.
                    </p>
                    <p className='article__paragraph'>
                        In February I found a company called SpaceX. I tuned into Falcon Heavy's test flight out of curiosity. That moment was when I learned what I wanted to do after high school.
                    </p>

                    <p className='article__paragraph'>
                    Dozens of posts across the web outline the long-term career roadmap to receive a job offer at a top tech company. A smaller number indicates that all the hard work in the world may not land you your dream job. Some sources state that up to 80% of positions are filled through professional connections.
                    </p>

                    <p className='article__paragraph'>
                        In this post, I explain how to pull your application from the bottom of the pile and into the hands of a future manager. Through years of trial and error, I found the four required attributes to send the best LinkedIn message possible. Three years after watching Falcon Heavy launch, I cracked the code.
                    </p>




                    <h4 className='article__content-subheader'>Include a Call to Action</h4>
                    <p className='article__paragraph'>
                        It's September 2020. Applications for SpaceX's Internship Program open up. I have one more opportunity to join as an intern before entering into the scary job market.
                    </p>
                    <p className='article__paragraph'>
                        I start to doubt myself. I have relevant experience. I have strong interview skills. Why haven't I broken through?
                    </p>
                    <p className='article__paragraph'>
                        Finding a job is tough. The stress builds as time passes. The responses that do come in are rejections. Let's see if I can get in touch with <font className='italic'>at least one</font> SpaceX employee.
                    </p>
                    <img src={falconHeavy} alt='LinkedIn message with call to action' className='article__image'></img>
                    <p><a target="_blank" rel="noopener noreferrer" href="https://www.flickr.com/photos/spacex/" className='bold'>SpaceX via Flickr</a><a target="_blank" rel="noopener noreferrer" href="https://creativecommons.org/licenses/by-nc/4.0/" className='bold'> (CC BY-NC 4.0)</a></p>
                    <p className='article__paragraph'>
                        The first step to sending a great LinkedIn message is to give your recipient a reason to respond. <a target="_blank" rel="noopener noreferrer" href="http://www.cs.cmu.edu/~kiesler/publications/2005pdfs/2005_understanding-email-predict.pdf" className='bold__link'>A study from Carnegie Mellon</a> found that people were twice as likely to delete emails that did not need a reply (30%) as those that did (15.5%). Your recipient understanding what step to take next could make the difference between a response and a rejection. Therefore, your LinkedIn message should always contain a question or call to action.
                    </p>
                    <p className='article__paragraph'>
                        What question should you ask? Your message is the introduction to what could be a lasting professional connection. Your main goal is to build a relationship, not to land an interview or get a referral. If you're seeking a job, follow these guidelines to choose the best call to action:
                    </p>

                    <p className='article__paragraph article__list-item bold'>DO:</p>
                    <ul className='privacy__list'>
                        <li><p className='article__paragraph article__list-item'>Are you available for a chat next week?</p></li>
                        <li><p className='article__paragraph article__list-item'>Can I ask you some questions about the role?</p></li>
                        <li><p className='article__paragraph article__list-item'>Are you open to connecting?</p></li>
                    </ul>

                    <p className='article__paragraph article__list-item bold'>DON'T:</p>
                    <ul className='privacy__list'>
                        <li><p className='article__paragraph article__list-item'>Let me know if you are open to chat.</p></li>
                        <li><p className='article__paragraph article__list-item'>Can we schedule an interview?</p></li>
                        <li><p className='article__paragraph article__list-item'>Can you put me in touch with the hiring manager?</p></li>
                    </ul>

                    <p className='article__paragraph'>A strong call to action means the recipient can say “yes” with little or no effort needed. If possible, a strong call to action also highlights something you can do for them. With a call to action in mind, let's draft a message to a person at SpaceX I'd love to work with:</p>
                    <img src={stepOne} alt='LinkedIn message with call to action' className='article__image'></img>

                    <p className='article__paragraph'>
                        This one sentence invitation is already a strong start to crafting an optimal message. Get creative with your call to action! They don't need to be in the form of a question. However, questions are the most efficient way to prompt a response.
                    </p>
                    <p className='article__paragraph'>
                        So far, I gave my recipient some context and asked him for a chat. Let's learn how to add more content to the message while keeping the attention of the reader.
                    </p>


                    <h4 className='article__content-subheader'>Write Simple Sentences</h4>
                    <p className='article__paragraph'>
                        The reading level of your text makes a significant difference on your likelihood of receiving a response. In fact, as language complexity increases, response rate decreases. Studies conducted by email marketing teams (example: <a target="_blank" rel="noopener noreferrer" href="https://www.litmus.com/" className='bold__link'>Litmus</a>), show reader attention to new messages span between 10 and 15 seconds. If your message is too complex, your recipient will disengage.
                    </p>
                    <p className='article__paragraph'>
                        Sentence complexity is measured in a variety of ways. One of the more common methods is the <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Flesch%E2%80%93Kincaid_readability_tests" className='bold__link'>Flesch-Kincaid readability test</a>. Flesch-Kincaid measures the number of syllables per word and the number of words per sentence. Other tools only measure complex words, or sentence length. Regardless of the way a message is measured, it's important to keep messages simple.
                    </p>

                    <p className='article__paragraph'>
                        When seeking a role in an industry with technical terms, readability is a challenge. What's the trick to keeping a message readable? Focus on the action and result of your experience. Specific tools or skills should not be included in your message. Rather, the outcome of the work is what reads best. With sentence complexity in mind, I will add to the LinkedIn message I started in the previous section.
                    </p>
                    <img src={stepTwo} alt='LinkedIn message with grade level' className='article__image'></img>
                    <p className='article__paragraph'>
                        Flesch-Kincaid scores this message's reading level at 7th grade. This means a person with a 7th grade education can easily read the text. My recipient now has more information about why I'm a strong fit. This message is on its way to being optimal to send to a recruiter or hiring manager!
                    </p>
                    <p className='article__paragraph'>
                        The content of the message is coming together, but it doesn't look great. Let's structure the message to look attractive to the human eye.
                    </p>



                    <h4 className='article__content-subheader'>Use the Rule of Three</h4>
                    <p className='article__paragraph'>
                        Break your message into three paragraphs.
                    </p>
                    <p className='article__paragraph'>
                        The human brain loves things that come in threes. Check out <a target="_blank" rel="noopener noreferrer" href="https://info.melissahughes.rocks/neuronugget/3-brain-secrets-behind-the-rule-of-3" className='bold__link'>this blog post</a> for common examples. A traditional message may be split into an introduction, a message body, and a salutation. Skipping an introduction or salutation is acceptable if you keep your message personal (more on that later!).
                    </p>
                    <p className='article__paragraph'>
                        Check out the below message as an example.
                    </p>
                    <img src={stepThree} alt='LinkedIn message with rule of three' className='article__image'></img>
                    <p className='article__paragraph'>Compared to a message without structure, this LinkedIn invitation looks stronger. The rule of three can be applied to any other part of your message. For example, you can provide three reasons why you're a great fit for a job. You can provide three times you're free to chat. Using the rule of three may not produce drastic results like including a call to action. More than anything, it's good practice to have a beginning, middle, and end to your message. </p>
                    <p className='article__paragraph'>Our message is almost complete. Let's take a look at the last text attribute to take advantage of.</p>





                    <h4 className='article__content-subheader'>Write Strong Language</h4>
                    <p className='article__paragraph'>The words used in a message controls its ability to convey meaning.</p>
                    <p className='article__paragraph'>Avoid adverbs in LinkedIn messages. Common adjectives include “very”, “extremely”, “fortunately”, or “unfortunately”. These words take up unnecessary space in your message's 300 character LinkedIn limit. They also decrease the strength of the message.</p>
                    <p className='article__paragraph'>For example, review these two sentences:</p>
                    <p className='article__paragraph article__list-item'>“I'm extremely excited about the opportunity to work as a Software Engineer.”</p>
                    <p className='article__paragraph'>“I'm excited about the opportunity to work as a Software Engineer.”</p>
                    <p className='article__paragraph'>The adverb “extremely” makes the message feel less genuine.</p>
                    <p className='article__paragraph'>Avoid weak verbs in LinkedIn messages. Common phrases like “to be” replace the stronger verb "to join". With a deeper understanding of language in mind, I will change my LinkedIn message:</p>
                    <img src={stepFour} alt='LinkedIn message with language' className='article__image'></img>
                    <p className='article__paragraph'>This message replaces “I'd love to be a part of your team” with “I'd love to join your team”. The new sentence reads better and saves 8 characters.</p>


                    <h4 className='article__content-subheader'>Bonus: Personalize Your Message</h4>
                    <p className='article__paragraph'>Above everything else, personalize your message.</p>
                    <p className='article__paragraph'>Google “cold LinkedIn template”. You will find plenty. However, you will not find a template that makes a more fitting message than you can. <a target="_blank" rel="noopener noreferrer" href="https://www.campaignmonitor.com/resources/guides/email-marketing-new-rules/" className='bold__link'>Personalized messages raise response rates by 26%.</a> Personalize your message by including their name or mentioning a common past workplace.</p>
                    <p className='article__paragraph'>These steps make the message feel more genuine and human. You also separate yourself from the other LinkedIn invites the recipient reads.</p>


                    <h4 className='article__content-subheader'>How Did Our Message Perform?</h4>
                    <p className='article__paragraph'>I sent connection requests over the course of two weeks to different teams at SpaceX. With my application submitted, reaching out to teams that matched my background felt easy. My goal: to connect with one SpaceX employee.</p>
                    <p className='article__paragraph'>I made eight connections.</p>
                    <p className='article__paragraph'>Two of them led to interviews.</p>
                    <p className='article__paragraph'>One of them turned into an offer.</p>



                    <h4 className='article__content-subheader'>What Next?</h4>
                    <p className='article__paragraph'>I built a <Link to='/' className='bold__link'>Message Analysis</Link> tool to help you write the best LinkedIn message possible. It tracks all four insights I highlighted here. The best part? It's 100% free.</p>
                    <img src={messageAnalysis} alt='Message Analysis' className='article__image'></img>
                    <p className='article__paragraph'>My mission with Rocketstart is to help you land your dream job. Sign up today, stay up to date with our product improvements, and <a target="_blank" rel="noopener noreferrer" href="mailto:luke@rocketstart.careers" className='bold__link'>shoot me a message</a> if you have anything on your mind. I wish you the very best in your job hunt.</p>
                    <p className='article__paragraph'>Watch SpaceX's Falcon Heavy launch (and land) <a target="_blank" rel="noopener noreferrer" href="https://youtu.be/A0FZIwabctw" className='bold__link'>here</a>.</p>
                    <p className='article__paragraph article__list-item'>Luke</p>
                    <p className='article__paragraph'>Founder, Rocketstart</p>

                </div>
            </div>

        </div>
        <CallToAction/>
        <div className="grey__bg">
            <Footer/>
        </div>

    </div>
  )
}

export default Article1
