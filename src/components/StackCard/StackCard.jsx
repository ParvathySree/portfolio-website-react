import React, { useState } from 'react'

import { Flex, Progress } from 'antd';
import './StackCard.css'



const StackCard = (props) => {

    const {id,skill,img,progress} = props.skills
    console.log(props)
    return (
        <>
         <div class="progress-con">
         <div class="skill-name">{skill}</div>
         <Progress percent={progress} strokeColor={progress < 50 ? 'red' : '#f6ff63'}/>
         </div>
        
        </>
        
  
    )
}

export default StackCard