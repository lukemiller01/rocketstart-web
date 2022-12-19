import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import './blog.css';

const Blog = () => {
  return (
    <div>
      <Navbar/>
      <div className='blog'>
        <p>
          Thanks for visiting!
        </p>
        <p>
          Blog posts for each individual insight are currently under construction.
        </p>
        <p>
          Please check back in later.
        </p>
      </div>
    </div>
  )
}

export default Blog