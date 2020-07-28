import React, {useState} from 'react';
import './styles.css';
import strokeIcon from '../../icons/strokeIcon.png';
import {useSelector} from "react-redux";
import {StateInterface} from "../../interfaces/StateInterface";
import {CountryInterface} from "../../interfaces/CountryInterface";

interface dropdownProps {
    setCountry(country: string): void;
    countries: CountryInterface[];
}


export default function CountriesDropdown(props: dropdownProps){

    const [open, setOpen] = useState(false);

    const toggleDropdown = () => {
        setOpen(!open);
    };

    const country = useSelector((state: { covid: StateInterface }) => {
        return state.covid.country;
    });

    const handleSelect = (country: string) => () => {
        props.setCountry(country);
        setOpen(false);
        console.log('Country is', country);

    };

    return(
        <div className="dropdown"
             onClick={toggleDropdown}>

            <div className="dropdown-title-container">
                <a className="country-dropdown">
                    {country ? country[0] + country.slice(1) : ''}
                </a>
                <img className="stroke"
                     src={strokeIcon}
                     onClick={toggleDropdown}/>
            </div>

            {open && (
                <div className="country-dropdown-list">
                    {props.countries.map((country, i) =>
                        <div key={i} className="country-dropdown-item" onClick={handleSelect(country.Slug)}>
                            {country.Country}
                        </div>)
                    }
                </div>
            )}
    </div>
)
}
