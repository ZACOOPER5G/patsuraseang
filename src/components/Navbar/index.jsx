import React from 'react';
import './style.scss';
import icon from '../../assets/favicon.png';
import background from '../../assets/background.jpeg';

export const Navbar = () => {
    return (
        <section className="navbar" data-scroll-section >
            
            <div className="navbar-logo link"><img src={icon} /></div>
            <div className="link">my work</div>
            <div className="link">contact</div>
            {/* <span className="background"></span> */}

        </section>
    )
}