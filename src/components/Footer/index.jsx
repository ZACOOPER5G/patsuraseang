import React from "react"
import { SectionHeader } from "../SectionHeader";
import './style.scss';

export const Footer = () => {
    return (
        <section className="footer" 
        data-scroll-section
        >
            <SectionHeader title="Made in"/>
            <h1 className="location" id="location-text">
                Sydney, Australia
            </h1>
        </section>
    )
}