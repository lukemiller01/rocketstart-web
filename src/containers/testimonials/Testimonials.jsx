import React from 'react'
import "./testimonials.css"
import  { Testimonial } from '../../components';

const testimonalData = [
    {
        name: 'Luke Miller',
        title: 'Founder @ Rocketstart',
        image: 'https://i.imgur.com/hU8yE56.jpeg',
        review: "\"Great extension that makes connection requests a breeze. Great work!\""
    },
    {
        name: 'Steve Jobs',
        title: 'Founder @ Apple',
        image: 'https://i.redd.it/yta0xtiii3m21.jpg',
        review: "\"Networking is the key to landing a job. Rocketstart makes it easy to network. I love its simplicity, and see a difference in the responses I'm receiving!\""
    },
    {
        name: 'George Washington',
        title: 'Founding Father',
        image: "https://i.imgur.com/62uwHFD.jpeg",
        review: "\"Freeeeeeeeeeeee.\""
    },
  ]

const Testimonials = () => {
  return (
    <div className='testimonials'>
        <div className='testimonials__header'>
            <h4 >Professionals ❤️ Rocketstart.</h4>
            <p>Check out all of our reviews on the Google Chrome Store.</p>
        </div>
        <div className='testimonial__container'>
            {testimonalData.map((item, index) => (
            <Testimonial name={item.name} title={item.title} image={item.image} review={item.review} key={item.name + index} />
            ))}
      </div>
    </div>
  )
}

export default Testimonials