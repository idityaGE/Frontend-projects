'use client';
import "../styles/style.css"
import Loop from "../components/Loop"
import React, { useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { WavyBackground } from "../components/ui/wavy-background";




function Hero() {
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(() => {
        gsap.from('#name', {
            opacity: 0,
            x: -100,
            duration: 1,
            delay: 0.5,
        })
    })
    const containerRef = useRef(null)
    return (
        <LocomotiveScrollProvider
            options={{
                smooth: true,
                lerp: 0.07,
                multiplier: 1.5,
                smartphone: { smooth: true }
            }}
            watch={[]}
            containerRef={containerRef}>

            <div id="main" data-scroll-container ref={containerRef}>
                <div id="page1" className="z-0">
                    <div className='flex items-center flex-col'>
                        <div className='ml-6 mt-[120px] xl:w-[70vw] lg:w-[80vw] md:w-[85vw] w-[90vw]'>
                            <h1 id="name" className='xl:text-6xl lg:text-5xl text-4xl font-bold opacity-80'>I'm <br /> Aditya Maurya</h1>
                            <h6 className='text-xl opacity-80'>19y/o Tech Enthusiast, India</h6>
                            <div className='mt-5 xl:w-3/4'>
                                <h6 className='xl:text-xl text-lg  opacity-90'>I'm a software developer based in India. I have a passion for developing software that improves the lives of those around me. I specialize in building web applications and have professional experience working with JavaScript, TypeScript, React, and Node.js.</h6>
                            </div>
                            <div className='mt-5'>
                                <h6 className='lg:text-xl text-lg opacity-90'>Feel free to reach me out at<br />&nbsp;<a href="#insta">@<i className='underline decoration-slate-400 decoration-2 underline-offset-4 hover:decoration-slate-500 duration-300'>idity_dx</i></a> or <a href="#mail" className='underline decoration-slate-400 decoration-2 underline-offset-4 hover:decoration-slate-500 duration-300'>&#9993;adiimaurya02@gmail.com</a> .</h6>
                            </div>
                            <div className='mt-4 flex flex-row'>
                                <h6 className='lg:text-xl text-lg opacity-90'>View my&nbsp;
                                    <a href="#resume" download={""} className='underline decoration-slate-400 decoration-2 underline-offset-4 hover:decoration-slate-500 duration-300'>Resume</a>&nbsp;&#10697;
                                </h6>
                            </div>
                        </div>
                        <div className='mt-5 w-full flex'>
                            <Loop direction="left" />
                        </div>
                        <Loop direction="right" />
                    </div>
                </div>

                <div id="page2" className="flex justify-center items-center z-10">
                    <div data-scroll data-scroll-speed="8" data-scroll-position="top" className="w-[80vw] h-[90vh] bg-black rounded-xl overflow-hidden">

                    </div>

                </div>

                <div id="page4"></div>
            </div>
            <footer>
                <WavyBackground waveWidth={80} className="max-w-4xl mx-auto pb-40">
                    <h1 className="text-white text-5xl">Hello</h1>
                </WavyBackground>
            </footer>
        </LocomotiveScrollProvider>
    )
}

export default Hero