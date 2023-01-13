import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import { useOutletContext } from 'react-router-dom';
import headshot from '../../assets/square.jpg'
import './about.css'

const About = () => {

  // Setting the navbar based on if the user is logged in
  const { navOne, navTwo, logoURL } = useOutletContext();

  return (
    <div>
      <Navbar navOne={navOne} navTwo={navTwo} logoURL={logoURL}/>
      
      <div className='about'>

        <h1 className='about__header'>About Rocketstart</h1>

        <div className='about__letter'>
          <p className='about__paragraph'>
            Hello! My name is Luke. Like me, you've probably struggled finding a job or internship. You send applications endlessly. You make dozens of connection requests on LinkedIn. You never hear back.
          </p>
          <p className='about__paragraph'>
            Those currently employed are prospecting for new opportunities. The number of college graduates rise by 3% every year. LinkedIn's user base grows by 3% every month. The average job posting will receive more applications in 2023 than ever before.
          </p>
          <p className='about__paragraph'>
            Qualified candiates are getting ghosted. They need a tool to cut through the noise. That's why I built Rocketstart. I compiled all the tools I used to receive job offers from Tesla and SpaceX into one platform. My mission is to help you land your dream job.
          </p>
          <p className='about__paragraph'>
            Get started and check out the product! I need early adopters like you so I can keep making Rocketstart better. I wish you the very best in your job hunt.
          </p>
          <p className='about__paragraph'>
            With ❤️, <br/> Luke
          </p>
        </div>

        <div className='about__profile'>
          <img className='about__headshot' src={headshot} alt='Luke Miller'></img>
          <h3 className='about__bold'><a target="_blank" rel="noopener noreferrer" className='mail__to' href="mailto:luke@rocketstart.careers">Luke Miller</a></h3>
          <p className='about__paragraph'>Founder</p>
        </div>

      </div>
    </div>
  )
}

export default About