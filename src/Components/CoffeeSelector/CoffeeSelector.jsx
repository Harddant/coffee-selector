import React, { useState, useRef, Component } from 'react'
import './CoffeeSelector.css'
import frontpage from '../Assets/fontpage.jpg'
import secondpage from '../Assets/secondpage.jpg'

class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }
}

componentDidMount() {
    fetch("https://fake-coffee-api.vercel.app/api")
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                items: json,
            })
        });
}



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