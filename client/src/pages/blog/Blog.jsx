import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../containers/footer/Footer'
import { useOutletContext } from 'react-router-dom';
import './blog.css';
import Article from '../../components/article/Article';
import { Helmet } from 'react-helmet';
import {map, retro, mac, pen} from './imports';

const Blog = () => {

  // Setting the navbar based on if the user is logged in
  const { navOne, navTwo, logoURL } = useOutletContext();

  return (
    <div>
      <Helmet>
        <title>Blog · Rocketstart</title>
      </Helmet>
      <Navbar navOne={navOne} navTwo={navTwo} logoURL={logoURL}/>
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