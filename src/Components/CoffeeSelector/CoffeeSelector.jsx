import React, { useEffect, useState } from 'react'
import './CoffeeSelector.css'
import { CoffeeInfo } from './CoffeeInfo'


export const CoffeeSelector = () => {
    const [coffeeData, setCoffeeData] = useState([]);
    const [randomNumber, setRandomNumber] = useState(0);
  
    const apiFilter = [0, 5, 6, 12, 15];

    const generateRandomNumber = () => {
      let newNumber = 0;
      while (newNumber === randomNumber || apiFilter.includes(newNumber)) {
        newNumber = Math.floor(1 + Math.random() * (20 - 1));
      }
      return newNumber;
    }

    async function getCoffeeData() {
        const newNumber = generateRandomNumber();
          setRandomNumber(newNumber);
          const data = await fetch(`https://fake-coffee-api.vercel.app/api/${newNumber}`).then(response => response.json());
          setCoffeeData(data[0]);
    }
  
    useEffect(() => {
      (async () => {
        try {
          await getCoffeeData();
        } catch (err) {
          console.log('Error occurred when fetching coffee data');
        }
      })();
    }, []);
    
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
                    <CoffeeInfo coffeeData={coffeeData} />
                    <button className="picker-btn" onClick={() => getCoffeeData()}>Select your coffee!</button>
                </div>
            </section>
        </>
    );
}