import React, { useState, useRef } from 'react'
import './CoffeeSelector.css'
import frontpage from '../Assets/fontpage.jpg'
import secondpage from '../Assets/secondpage.jpg'
export const CoffeeSelector = () => {

    return (
        <>
            <section className="hero">
                <div className="container">
                    <h1 className="title">Coffee Selector</h1>
                    <h2 className="header">Pick your next best coffee</h2>
                    <p className="paragraph">Click the button below and let it suprise you with a perfect bean choice.</p>
                    <button className="scroll-btn">Click me</button>
                </div>
            </section>
            
            <section className="picker">
                <div className="coffee-info"></div>
                <button className="picker-btn">Select your coffee!</button>
            </section>
        </>
    );
}