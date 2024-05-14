import React, { useEffect, useState } from 'react'
import StackCard from '../StackCard/StackCard';
import { stackArr } from '../../utils/Data/Data';
import {MEDIUM_URL} from '../../utils/links/links'
import './Stack.css'
import TimeLine from '../TimeLine/TimeLine';




const Stack = () => {

  const [skillArr, setSkillArr] = useState([])

  useEffect(() => {
    setSkillArr(stackArr)
  }, [stackArr])

 

  return (

    <div className='stack-con'>
      <div className='vertical-subcon'>
        {/* <span>SKILLS</span> */}
      </div>
      <div className="stack-con-sub">
        {/* <h1 className='title-1'>Things I'm good at.</h1> */}
        <div className="skill-con">
          {skillArr.map((skill) => {
            return (
              <StackCard key={skill.id} skills={skill} />
            )
          })}
        </div>
      </div>

    </div>
  )
}

export default Stack