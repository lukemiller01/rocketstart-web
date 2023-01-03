import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import './error.css'

const Error = () => {

    const { error, setError } = useAuth();

  return (
    error && (
        <div>
            <h3 onClick={() => setError("")}>Error: {error}</h3>
        </div>
    )
  )
}

export default Error