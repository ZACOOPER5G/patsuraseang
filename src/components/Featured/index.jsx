import React from 'react';
import './style.scss'
import img1 from '../../assets/featureimg1.jpg';
import img2 from '../../assets/featureimg2.jpg'

export const Featured = () => {
    return (
        <section className="featured-section"
        data-scroll-section
        >
            <div className='featured-row-layout'></div>
                <h6>green</h6>
                <img src={img1} alt="bird flying in New Zealand" data-scroll />
            <div className='featured-column-layout'>
                <h6>lily</h6>
                <img src={img2} alt="foggy ariel shot" data-scroll />
            </div>
        </section>
    )
}