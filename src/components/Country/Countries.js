import './Countries.css'
import React, { useEffect, useState } from 'react';
import Country from '../DisplayCountry/Country';

const Countries = () => {
    const [countries, serCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => serCountries(data))
    }, [])
    return (
        <div>
            <h2 style={{ color: 'gray', marginTop: '40px' }}>Rest Countries Found: {countries.length}</h2>
            <div className='country-container'>
                {countries.map(country => <Country country={country} key= {country.name} ></Country>)}
            </div>
        </div>

    );
};
export default Countries;