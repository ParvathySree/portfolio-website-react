import React from 'react'
import Stack from '../Stack/Stack'
import Home from '../Home/Home'
import './About.css'

const About = () => {
  return (
    <div className='about-con'>
        <div>
            <Home/>
        </div>
        <div>
            <Stack/>
        </div>
    </div>
  )
}

export default About