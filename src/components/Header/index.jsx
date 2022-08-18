import React, { useEffect } from 'react';
import gsap from 'gsap';
import SplitText from '../../utils/Split3.min.js';

import instaImg from '../../assets/insta.png';
import fbImg from '../../assets/fb.png';
import emImg from '../../assets/email.png';
import './style.scss';

export const Header = () => {
    useEffect(() => {
        const split = new SplitText('#header-text', {
            type: 'lines',
            linesClass: 'lineChildren'
        });

        const splitParent = new SplitText('#header-text', {
            type: 'lines',
            linesClass: 'lineParent'
        });

        gsap.to(split.lines, {
            duration: 1,
            y: 0,
            opacity: 1, 
            stagger: 0.1,
            easer: 'power2'
        })
    }, [])

    return (
        <section className="header-container"
        data-scroll-section
        >
             <ul className="social-icon">
                <li><a href="https://www.instagram.com/patsuraseang/" target="_blank"><img src={instaImg} alt="instagram-logo"/></a></li>
                <li><a href="https://www.facebook.com/10209061675810954" target="_blank"><img src={fbImg} alt="facebook-logo"/></a></li>
                <li><a href="mailto:info@patsuraseang.com" target="_blank"><img src={emImg} alt="email-logo"/></a></li>
            </ul>
            <h1 id="header-text">Pat Suraseang</h1>
        </section>
    )
}