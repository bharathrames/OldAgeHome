import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'
const Banner = () => {
    return (
        <>
            <div className="container">
                <div className="left">
                    <img className="fade-in" src="https://srimathaoldagehome.com/wp-content/uploads/2021/04/Old-Age-Home-in-Hyderabad-India.jpg" alt="Your Image" />
                </div>
                <div className="right">
                    <ul className="menu">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/requirements">Requirements</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li><Link to="/adminlogin">Admin Login</Link></li>
                    </ul>
                </div>
            </div>
            <Home/>
        </>
    )
}

export default Banner