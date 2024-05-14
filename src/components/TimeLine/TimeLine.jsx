import * as React from 'react';
import { Timeline } from 'antd';
import './TimeLine.css'
const TimeLine = () => {
    return (
        <div>
           <Timeline
    items={[
      {
        children: 'Software Engineer(Nov 2023 - Present)',
        // label : 'Nov 2023 - Present'
      },
      
      {
        children: 'Software Engineer Trainee(Nov 2022 - Nov 2023)',
        // label : 'Nov 2022 - Nov 2023'

      },
      
    ]}
  />
        </div>
    )
}

export default TimeLine