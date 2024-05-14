import React, { useState, useEffect } from 'react';
import { Waypoint } from 'react-waypoint';
import { Rate } from 'antd';
import './StackCard.css';

const StackCard = (props) => {
    const { rating, skill, img, subTxt } = props.skills;
    const [rate, setRate] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setRate(rating);
    }, [rating]);

    const handleEnterViewport = () => {
        setIsVisible(true);
    };

    const handleLeaveViewport = () => {
        setIsVisible(false);
    };

    return (
        <Waypoint onEnter={handleEnterViewport} onLeave={handleLeaveViewport}>
            <div className={`progress-con ${isVisible ? 'visible' : ''}`} style={{ width: isVisible ? '250px' : '0' }}>
                <div className='progress-con-card'>
                    <div className='skill-con-out'>
                        <span className='img-skill'><img src={img} alt="Skill Icon" /></span>
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
        </Waypoint>
    );
};

export default StackCard;
