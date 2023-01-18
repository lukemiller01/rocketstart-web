import React from 'react'
import './article.css'

const Article = ({image, date, title}) => {
  return (
    <div className='article__container'>
        <div className='article__image-container'>
            <img className='blog-article_image' src={image} alt="blog illustration"/>
        </div>
        <div className='blog-article__content-container '>
            <p className='article__date'>{date}</p>
            <h2 className='article__title'>{title}</h2>
        </div>
    </div>
  )
}

export default Article