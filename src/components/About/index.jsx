import React, { useState, useEffect, useRef } from "react";
import { SectionHeader } from "../SectionHeader";
import cn from "classnames";

import gsap from "gsap";
import SplitText from "../../utils/Split3.min.js";

import { useOnScreen } from "../hooks/useOnScreen";

import './style.scss';

export const About = () => {
    const ref = useRef(null);

    const [reveal, setReveal] = useState(false);

    const onScreen = useOnScreen(ref);

    useEffect(() => {
        if (onScreen) setReveal(onScreen);
    }, [onScreen])

    useEffect(() => {
        if (reveal) {
            const split = new SplitText('#headline', {
                type: 'lines',
            });

            gsap.to(split.lines, {
                duration: 1,
                y: -20,
                opacity: 1, 
                stagger: 0.1,
                easer: 'power4.out'
            })
        }
    }, [reveal]);

    return (
        <section className="about-section"
        data-scroll-section
        >
            <SectionHeader title="about" />
            <p ref={ref} id="headline" className={cn({'is-reveal': reveal})} >
                Hi, I'm Pat. I love getting fisted by other men and taking photos is my way of expressing that.
            </p>
        </section>
    )
}