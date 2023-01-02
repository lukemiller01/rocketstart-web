import React from 'react'
import { Article } from '../../components'
import './blog.css'
import {dumbbell, map, retro, mac, pen} from './imports'

const Blog = () => {
  return (
    <div className='lola__blog section__padding' id='blog'>
      <div className='lola__blog-heading'>
        <h1 className='header__text'>Lola is accelerating. We're blogging about it.</h1>
      </div>
      <div className='lola__blog-container'>
        <div className='lola__blog-container_groupA'>
          <Article image={dumbbell} date={"August 17 2022"} title={"The Trick to Setting Goals: Start Early"} />
        </div>
        <div className='lola__blog-container_groupB'>
          <Article image={map} date={"July 20 2022"} title={"How to Plan for the Things You Love"} />
          <Article image={retro} date={"July 1 2022"} title={"What's Wrong With Taking a Week Off?"} />
          <Article image={mac} date={"April 25 2022"} title={"3 Habits Separating You From Productivity"} />
          <Article image={pen} date={"February 10 2022"} title={"Why Boredom Is Important"} />
        </div>
      </div>
    </div>
  )
}

export default Blog