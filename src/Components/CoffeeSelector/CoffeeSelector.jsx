import React, { useState, useRef } from 'react'
import './CoffeeSelector.css'
import frontpage from '../Assets/fontpage.jpg'
import secondpage from '../Assets/secondpage.jpg'

export const CoffeeSelector = () => {
    const scrollToPicker = () => {
        const pickerSection = document.querySelector('.picker');
        if (pickerSection) {
            pickerSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <section className="hero">
                <div className="container">
                    <h1 className="title">Coffee Selector</h1>
                    <h2 className="header">Pick your next best coffee</h2>
                    <p className="paragraph">Click the button below and let it surprise you with a perfect bean choice.</p>
                    <button className="scroll-btn" onClick={scrollToPicker}>Click me</button>
                </div>
            </section>
            
            <section className="picker">
                <div className='wrapper'>
                    <div className="coffee-info"></div>
                    <button className="picker-btn">Select your coffee!</button>
                </div>
            </section>
        </>
    );
}