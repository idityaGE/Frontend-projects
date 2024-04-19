import React from 'react'
import './Home.css'
import { useEffect, useRef } from 'react'
import LocomotiveScroll from 'locomotive-scroll'

export default function Home() {

    const scrollRef = useRef(null)

    useEffect(() => {
        const scroll = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
        })
        return () => {
            scroll.destroy()
        }
    }, [])
    return (
        <div id='main' ref={scrollRef} className='scroll-container'>
            <div id='page1'>
                <div id="nav">
                    <a className="logo" href="https://www.instagram.com/idity_dx/">
                        <h3>@<b>iditya</b>_dx*</h3>
                    </a>
                    <div id="nav-links">
                        <a class="links" href="https://github.com/idityage" target="_blank"><img src="/src/assets/github.png" alt="" /></a>
                        <a class="links" href="https://discord.gg/Qnt3WCUSXA"><img src="/src/assets/discord.png" alt="" /></a>
                        <a class="links" href="https://www.instagram.com/idity_dx/"><img src="/src/assets/instagram (1).png" alt="" /></a>
                    </div>
                </div>
                <div className='top'>
                    <p>Passionate Student and Dedicated Coder: Navigating the Intersection of Learning and Programming</p>
                    <h1 id='name'>I'm Aditya,
                        <br /> a student & web developer!
                    </h1>
                </div>
                <div id="loop">
                    <h1><b>&nbsp;&nbsp;IT'S </b>NOT A <b><i><span>BUG;</span></i></b> IT'S AN UNDOCUMENTED
                        <span><i>FEATURE.</i></span></h1>
                    <h1><b>&nbsp;&nbsp;IT'S </b>NOT A <b><i><span>BUG;</span></i></b> IT'S AN UNDOCUMENTED
                        <span><i>FEATURE.</i></span></h1>
                    <h1><b>&nbsp;&nbsp;IT'S </b>NOT A <b><i><span>BUG;</span></i></b> IT'S AN UNDOCUMENTED
                        <span><i>FEATURE.</i></span></h1>
                </div>

                <div className="shape-motion2">
                    <div className="shape12"></div>
                </div>

                <div id='page2'>
                    <div id='skills' data-scroll data-scroll-speed="5">
                        <h1 className=' text-6xl text-center font-bold pt-4'>My Skill</h1>
                        <hr color='black' className='mt-4 h-[3px] mx-auto w-[80vw]' />

                        <div className='flex' >
                            <div id='softwareDeveloper'>
                                
                            </div>
                            <div id='webDeveloper'></div>
                            <div id='others'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
