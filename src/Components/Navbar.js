import React from 'react'
import './Styles/Navbar.css'

export default function Navbar() {
  return (
    <>
        <header>
            <nav>
                <div className="mainlogo">
                    <h3>myGoal</h3>
                </div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Contact Me</a></li>
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">Login/Signup</a></li>
                </ul>
            </nav>
        </header>
    </>
  )
}
