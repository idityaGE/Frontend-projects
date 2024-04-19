'use client';
import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


function page() {
    const container = useRef(null);
    gsap.registerPlugin(ScrollTrigger);


    useGSAP(() => {
        gsap.to('#box', {
            scrollTrigger: {
                trigger: "#box",
                start: "top 50%",
                end: "bottom 10%",
                scrub: 1,
                pin: true,
                markers: true
            },
            rotation: 900,
            duration: 2,
        })
    })

    return (
        <div className='flex justify-center items-center w-full h-[200vh]' ref={container}>
            <div id='box' className='w-[300px] h-[300px] bg-fuchsia-400 rounded-lg '></div>
        </div>
    )
}


export default page