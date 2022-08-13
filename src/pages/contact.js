import React from 'react'
import {navigate} from "gatsby"

const contact = () => {
    const triggerNavigation = () => {
        navigate("/about")
    }
  return (
    <div>
        <p>Triggering page navigation via onClick.</p>
        <button onClick={triggerNavigation}>Go to about page</button>
    </div>
  )
}

export default contact