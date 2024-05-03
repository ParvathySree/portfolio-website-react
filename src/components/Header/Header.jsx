import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'
const Header = () => {
    const [selected,setSelected] = useState('about')
    const location = useLocation();

    useEffect(() => {
        switch (location.pathname) {
            case '/':
                setSelected('about');
                break;
            case '/projects':
                setSelected('project');
                break;
            default:
                setSelected('about');
                break;
        }
    }, [location]);

    return (
        <div className='menu-bar'>
            <ul className='menu'>
                <Link to="/" className='hdr-link' onClick={()=>setSelected('about')}><li className={selected ==='about'?'active':'inactive'}>About</li></Link>
                <Link to="/projects" className='hdr-link' onClick={()=>setSelected('project')}><li className={selected ==='project'?'active':'inactive'}>Projects</li></Link>
            </ul>
        </div>
    )
}

export default Header