import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import './blog.css';
import Article from '../../components/article/Article';
import {map, retro, mac, pen} from './imports';

const Blog = () => {
  return (
    <div>
      <Navbar/>
      <div className='blog grey__bg'>
        <h1>Blog</h1>
        <p>Discover Rocketstart's posts on making the most out of your job search.</p>
        <div className='blog__container'>
          <Article image={map} date={"December 23 2022"} title={"Rocketstart's Four Key Insights"}/>
          <Article image={retro} date={"December 23 2022"} title={"Blog Post 2"}/>
          <Article image={mac} date={"December 23 2022"} title={"3 Habits Separating You From Productivity"}/>
          <Article image={pen} date={"December 23 2022"} title={"Why Boredom Is Important"}/>
        </div>
      </div>
    </div>
  )
}

export default Blog