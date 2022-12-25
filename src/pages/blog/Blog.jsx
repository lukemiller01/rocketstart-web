import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../containers/footer/Footer'
import './blog.css';
import Article from '../../components/article/Article';
import {map, retro, mac, pen} from './imports';

const Blog = () => {
  return (
    <div>
      <Navbar/>
      <div className='blog'>
        <h1>Blog</h1>
        <p>Discover Rocketstart's posts on making the most out of your job search.</p>
        <div className='blog__container'>
          <Article image={map} date={"December 23 2022"} title={"LinkedIn Cold Connections: How to Craft a Message"}/>
          <Article image={retro} date={"December 23 2022"} title={"Using Your LinkedIn Network to Find a Job"}/>
          <Article image={mac} date={"December 23 2022"} title={"Land Your Dream Internship: GPA, Year, & Major Requirements Explained"}/>
          <Article image={pen} date={"December 23 2022"} title={"Why Your LinkedIn Cold Outreach Template Isn't Working"}/>
        </div>
      </div>
      <div className='grey__bg'>
          <Footer/>
        </div>
    </div>
  )
}

export default Blog