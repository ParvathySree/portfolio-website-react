import React, { useEffect, useState } from 'react'
import './Stack.css'
import StackCard from '../StackCard/StackCard';
import { stackArr } from '../../utils/Data/Data';




const Stack = () => {

  const [skillArr,setSkillArr] = useState([])

  useEffect(() => {
    setSkillArr(stackArr)
  }, [stackArr])
  
  return (
    <div className='stack-con'>
        <h1 className='title-1'>SKILLS</h1>
        <div class="skill-con">
          {skillArr.map((skill)=>{
            return(
              <StackCard key={skill.id} skills={skill}/>
            )
          })}
        </div>
    </div>
  )
}

export default Stack