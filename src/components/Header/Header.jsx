import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
const Header = () => {
    return (
        <div className='menu-bar'>
            <ul className='menu'>
                <Link to="/" className='hdr-link'><li>About</li></Link>
                <Link to="/projects" className='hdr-link'><li>Projects</li></Link>
            </ul>
        </div>
    )
}

export default Header