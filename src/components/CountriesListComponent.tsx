import React from 'react';
import CountryComponent from './List';
import '../styles/ListStyles.css';

interface countryListProps {
    array: ['ayana', 'lol']
}

const CountriesListComponent = (props: countryListProps) => {
    return(
        <div className="ListContainer">
            <a className="List">
                {props.array.map((val, i) =>
                <li key={i}>{val}</li>)}
            )}
            </a>
            </div>
    )
};

export default CountriesListComponent;
