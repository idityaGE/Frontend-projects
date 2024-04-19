import React from 'react'
import './SideNav.css'
import { NavLink } from 'react-router-dom'

function SideNav() {
    return (
        <>
            <nav>
                <div className='Nav-top'>
                    <img src="/src/assets/logo-animato.gif" alt="logo" />
                </div>

                <div className='Nav-center'>
                    <div className='st'>
                        <NavLink
                            to="#"
                            className='nav-link hover:text-white transition duration-300'
                            href="#projects">
                            Home
                        </NavLink>
                    </div>
                    <div className='nd'>
                        <NavLink
                            className='nav-link hover:text-white transition duration-300'
                            to="#"
                            href="#contact">
                            About
                        </NavLink>
                    </div>
                    <div className='rd'>
                        <NavLink
                            className='nav-link hover:text-white transition duration-300'
                            to="#"
                            href="#projects">
                            Projects
                        </NavLink>
                    </div>
                    <div className='th'>
                        <NavLink
                            className='nav-link hover:text-white transition duration-300'
                            to="#"
                            href="#contact">
                            Contact
                        </NavLink>
                    </div>
                </div>

                <div className='Nav-bottom'>
                    <h4>
                        e-mail
                        <br />
                        meeeeee
                    </h4>
                    <img src="/src/assets/mail.png" alt="Mail" />
                </div>
            </nav>
        </>
    )
}

export default SideNav