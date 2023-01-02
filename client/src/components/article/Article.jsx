import React from 'react'
import './article.css'

const Article = ({image, date, title}) => {
  return (
    <div>
        <div className='article__container'>
            <div className='article__image-container'>
                <img className='article__image' src={image} alt="blog illustration"/>
            </div>
            <div className='article__content-container'>
                <p className='article__date'>{date}</p>
                <h2 className='article__title'>{title}</h2>
            </div>
        </div>
    </div>
  )
}

export default Article