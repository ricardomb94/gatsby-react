import React from 'react'
import { Link } from 'gatsby'

const NotFound = () => {
  return (
    <div>
        <h1>Oh no!</h1>
        <p>The page you were looking for does not exist.</p>
        <Link to='/about'>Take me home</Link>
    </div>
  )
}

export default NotFound