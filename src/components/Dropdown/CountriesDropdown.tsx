import React, {useState} from 'react';
import './DropdownStyles.css';
import strokeIcon from '../../icons/strokeIcon.png';
// import '../styles/IconStyles.css'
// import '../styles/TextStyles.css'
// import '../styles/ListStyles.css';
import {useSelector} from "react-redux";
import {StateInterface} from "../../interfaces/StateInterface";
import {CountryInterface} from "../../interfaces/CountryInterface";

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

    const country = useSelector((state: { covid: StateInterface }) => {
        return state.covid.country;
    });

    const onOptionClicked = (country: string) => () => {
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
                        <div key={i} className="country-dropdown-item" onClick={onOptionClicked(country.Slug)}>
                            {country.Country}
                        </div>)
                    }
                </div>
            )}
    </div>
)
}
