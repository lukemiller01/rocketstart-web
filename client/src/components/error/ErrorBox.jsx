import React from 'react'
import './error.css'

const Error = ({message, justify}) => {
  return (
    <div className={`error ${justify ? 'error__center' : 'error__left'}`}>
        <p className='error__text'>{message}</p>
    </div>
  )
}

export default Error