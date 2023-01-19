import React from 'react'
import { useOutletContext } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Navbar } from '../../../components';
import { Link } from 'react-router-dom';
import { CallToAction, Footer } from '../../../containers';
import '../articles.css';

import techlayoffs from '../../../assets/techlayoffs.png';
import mattinas from '../../../assets/mattinas.png'
import badge from '../../../assets/badge.png'

const Article2 = () => {

    // Setting the navbar based on if the user is logged in
    const { navOne, navTwo, logoURL } = useOutletContext();
    
    window.umami.trackView('/blog/why-I-built-rocketstart');

  return (
    <div>
        <Helmet>
            <title>Blog · Rocketstart</title>
        </Helmet>
        <Navbar navOne={navOne} navTwo={navTwo} logoURL={logoURL}/>

        <div className='article'>
            <div className='article__content-header__container'>
                <h1 className='article__content-header'>Why I Built Rocketstart</h1>
                <p className='article__content-header'>Last Updated: January 19 2023</p>
            </div>

            <div className='article__content-container'>
                <div className='article__content'>

                    <h4 className='article__content-subheader'>Introduction</h4>
                    <p className='article__paragraph'>
                        I received my first internship offer after 2 months at university.
                    </p>
                    <p className='article__paragraph'>
                        I walk through the doors to my school's networking event. It's October 2018. I have 8 weeks of university education. I may be the only freshman out of the thousand attendees. Hours go by without any luck finding a lead. The event ends in 10 minutes, so I have one more opportunity. I come across a company table whose line, though enormous during the day, is gone. The woman is packing her things. I introduce myself and give her my résumé. The first experience I listed was my high school job at a pizzeria. I read her facial expression as she skims the page.
                    </p>
                    <img src={mattinas} alt='Résumé snippet' className='article__image'></img>
                    <p className='article__paragraph'>
                        “Why are you here?”
                    </p>
                    <p className='article__paragraph'>
                        “Practice.” I say.
                    </p>
                    <p className='article__paragraph'>
                        I wasn't there to land a job. I knew those opportunities were for the more qualified juniors and seniors. She asks me about my time at school and what I'm interested in working on after I graduate. By the end of the conversation, I have an interview set up with her the following week. That interview led to my first internship. 
                    </p>
                    <p className='article__paragraph'>
                        I had no previous technical experience. I didn't study at a top school. I didn't receive the job from a family friend. She believed in me.
                    </p>




                    <h4 className='article__content-subheader'>The Tech Industry in 2023</h4>
                    <p className='article__paragraph'>
                        Landing a job is tough.
                    </p>
                    <p className='article__paragraph'>
                        There will always be a more qualified candidate. There will always be someone with a résumé more optimized to get noticed by a machine. There will always be someone with better interviewing skills. You may share the experience of sending dozens of job applications only to receive one automated rejection email. So, what can you do to stand out in the application system?
                    </p>
                    <p className='article__paragraph'>
                        Nothing. In fact, you should avoid it.
                    </p>
                    <p className='article__paragraph'>
                        <a target="_blank" rel="noopener noreferrer" href="https://layoffs.fyi/" className='bold__link'>Over 150,000 people were laid off from their tech job in 2022.</a> As of mid-January, another 35,000 people were laid off in 2023.
                    </p>
                    <p className='article__paragraph'>
                        As the year progresses, we'll see tech layoffs in 2023 dwarf 2022's numbers. It's frightening for those impacted by layoffs. It's also frightening for those breaking into tech. If you're new in the job market, changing career paths, or don't have prior experience, you're at a severe disadvantage. There's now thousands of people with experience shooting for the same role as you. Further, companies aren't hiring at the same rate they were 12 months ago. With less openings and more candidates, finding a job is more difficult now than it has been in years by an order of magnitude.
                    </p>
                    <img src={techlayoffs} alt='Tech layoffs chart' className='article__image'></img>
                    <p className='article__paragraph'>
                        So, the traditional application system is broken. What should you do?
                    </p>
                    <p className='article__paragraph'>
                        Network.
                    </p>
                    <p className='article__paragraph'>
                        But don't just add to your LinkedIn connections. Meet new people. Join online Slack, Discord, and LinkedIn communities. Reach back out to that person you met last month. Learn from them, and provide value in return. I didn't even know what LinkedIn was until I sought out help. With no direction, I found my way because of the people I built relationships with.
                    </p>
                    <p className='article__paragraph'>
                        If you don't know how to network: practice.
                    </p>
                    <p className='article__paragraph'>
                        Your first cold message may not lead to your next role. The first relationship you build may go stale after a week. The ability to create relationships (especially online) is a challenge for everyone. Fortunately, tools exist to help you. And the more you practice, the better you will be. You'll also garner support from those you meet along the way.
                    </p>



                    <h4 className='article__content-subheader'>Why I Built Rocketstart</h4>
                    <p className='article__paragraph'>
                        Rocketstart is a platform that lets job seekers discover the contact hiring for any job posted online. After finding the contact, Rocketstart helps you craft the best possible message to them. Your draft is scanned for the four most important attributes in a cold message. When you're done, you have a real person to reach out to and a perfect message to send to them.
                    </p>
                    <p className='article__paragraph'>
                        All in a few clicks.
                    </p>
                    <p className='article__paragraph'>
                        I walked into my university's career fair as a freshman among upperclassmen. At the time I knew almost nothing about finding a job. But I knew that applying online and hoping for the best was a long shot regardless of my year in school. During my career as an undergraduate, I was fortunate to amass two collective years of work experience. I spent a majority of that time in the most coveted internship programs in the United States. Want to know how I did it? Check out <Link to='/blog/how-I-landed-my-job-at-spacex' className='bold__link'>How I Landed My Job at SpaceX with a LinkedIn Message.</Link>
                    </p>
                    <img src={badge} alt='Tech layoffs chart' className='article__image'></img>
                    <p className='article__paragraph'>
                        I succeeded not because I was the best candidate that applied, but because I grew my network of people supporting and believing in me along the way.
                    </p>
                    <p className='article__paragraph'>
                        Now it's time for me to give back. It's my mission to help you land your dream job. That's why I built Rocketstart.
                    </p>
                    <p className='article__paragraph'>Sign up today, stay up to date with our product improvements, and <a target="_blank" rel="noopener noreferrer" href="mailto:luke@rocketstart.careers" className='bold__link'>shoot me a message</a> if you have anything on your mind. I wish you the very best in your job hunt.</p>
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

export default Article2