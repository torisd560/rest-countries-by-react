import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name , capital, population, flag} = props.country
    return (
        <div className = 'single-country'>
            <img src={flag} alt="" />
            <h2> Country : {name}</h2>
            <p ><b>Capital :</b> {capital}</p>
            <p ><b>Population:</b> {population}</p>
        </div>
    );
};
export default Country;