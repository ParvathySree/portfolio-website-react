import React, { useEffect, useState } from 'react'
import { Rate } from 'antd';
import './StackCard.css'



const StackCard = (props) => {

    const {rating,skill,img,subTxt} = props.skills
    const [rate,setRate] = useState('')

    useEffect(() => {
      setRate(rating)
    }, [rating])
    
    return (
        <>
         <div className="progress-con">
            <div className='progress-con-card'>
                <div className='skill-con-out'>
                    <span className='img-skill'><img  src={img}/></span>
                    <div>
                        <span className='skill-maintext'>{skill}</span>
                        <div>
                        <span className='skill-subtext'>{subTxt}</span>
                        </div>
                        <div>
                        <Rate disabled allowHalf value={rate} />
                        </div>
                    </div>
                </div>

            </div>
        
         </div>
        
        </>
        
  
    )
}

export default StackCard