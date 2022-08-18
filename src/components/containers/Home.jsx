import React, { useState, useRef, useEffect } from 'react';


import { CustomCursor } from '../CustomCursor/index';
import { Navbar } from '../Navbar/index';
import { Footer } from '../Footer/index';
import { Header } from '../Header/index';
import { Featured } from '../Featured/index';
import { About } from '../About/index';
import { Gallery } from '../Gallery/index';

import '../styles/home.scss';
import { useLocoScroll } from '../hooks/useLocoScroll';

export const Home = () => {

    const stateType = {
        PRELOAD: "PRELOAD",
        LOAD: "LOAD",
        POSTLOAD: "POSTLOAD",
    }
    const ref = useRef(null);
    const [preloader, setPreloader] = useState(true);

    useLocoScroll(!preloader);

    const [timer, setTimer] = useState(4);

    const id = useRef(null);

    const clear = () => {
        window.clearInterval(id.current);
        setPreloader(false)
    }

    useEffect(() => {
        id.current = window.setInterval(() => {
            setTimer(timer => timer - 1)
        }, 1000)
    }, []);

    useEffect(() => {
        if(timer === 0) {
            clear();
        }
    }, [timer]);

    return (
        <>
            <CustomCursor />

            {preloader ? (
            <div className='loader-wrapper absolute'>
                    <h1>Pat Suraseang</h1>
                    <h2>Photography</h2>
                </div>
            ) : (
            <div className="main-container" id="main-container"
            data-scroll-container
            ref={ref} 
            >
                <Navbar />
                <Header />
                <Featured />
                <About />
                <Gallery />
                <Footer />
            </div>
            )}
        </>
    )
}