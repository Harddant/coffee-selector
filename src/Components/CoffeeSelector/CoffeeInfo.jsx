import React from 'react'
import './CoffeeSelector.css'


export const CoffeeInfo = ({coffeeData}) => {


    return (
        <div className="coffee-info">
            <div className='coffee-info-container'>
                <h1 className='coffee-name'><b>Name:</b> {coffeeData.name}</h1>
                <p className='coffee-description'> <b>Description:</b> {coffeeData.description}</p>
                <p className='coffee-price'> <b>Price:</b> €{coffeeData.price}</p>
                <p className='coffee-region'> <b>Region</b>: {coffeeData.region}</p>
                <p className='weight'> <b>Weight:</b> {coffeeData.weight}</p>
                <div className={'coffee-flavor-container'}>
                    <p className={`coffee-flavor`}> <b>Flavors:</b></p>
                    {coffeeData.flavor_profile?.map((flavor, index) => (
                        <p key={index} className={`coffee-flavor`}>{flavor}</p>
                    ))}
                </div>
                <div className={'coffee-grind-container'}>
                    <p className={`coffee-grind`}> <b>Grind:</b></p>
                    {coffeeData.grind_option?.map((grind, index) => (
                        <p key={index} className={`coffee-grind`}>{grind}</p>
                    ))}
                </div>
                <p className='roast-level'> <b>Roast Level:</b> {coffeeData.roast_level}</p>
            </div>
            <div className="coffee-info-img">
                <img className='coffee-img' src={coffeeData.image_url} alt={coffeeData.name}/>
            </div>
        </div>
    );
}