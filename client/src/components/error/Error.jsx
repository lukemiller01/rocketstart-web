import React from 'react'
import './error.css'

const Error = ({message}) => {
  return (
    <div className='error'>
        <p className='error__text'>{message}</p>
    </div>
  )
}

export default Error