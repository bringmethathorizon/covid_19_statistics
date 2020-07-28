import React, {useEffect, useState} from 'react';
import '../styles/DropdownStyles.css';
import strokeIcon from '../icons/strokeIcon.png';
import '../styles/IconStyles.css'
import '../styles/TextStyles.css'
import {CountryInterface} from "../interfaces/CountryInterface";

interface dropdownProps {
    // title: string,
    setCountry(country: string): void;
    countries: CountryInterface[];
}


export default function CountriesDropdown(props: dropdownProps){

    const [open, setOpen] = useState(false);

    const toggleDropdown = () => {
        setOpen(!open);
        // dispatch(actions.fetchCountries());

    };

    const onOptionClicked = (country: string) => () => {
        props.setCountry(country);
        setOpen(false);
    };

    return(
        <div className="Dropdown">
            <img
                className="Stroke"
                src={strokeIcon}
                onClick={() => toggleDropdown()}/>
            <div>
                <a className="CountryDropdown"> </a>
            </div>
            {open && (
                <div className="CountryDropdownList">
                    <ul>
                        <li>
                        { props.countries.map((country, i) => <li key={i} onClick={onOptionClicked(country.Slug)} className='list-item'>{country.Country}</li>)}
                        </li>
                    </ul>
                </div>
            )}
    </div>
)
}
