import React from 'react';
import Dropdown from '../components/CountriesDropdown';
import '../styles/BackgroundStyles.css';
import {Country} from '../hooks/Country'
import {ListOfCountries} from '../hooks/ListOfCountries';

export const MainContainer = () => {

    const countriesList = ListOfCountries();
    const { setCountry } = Country();

    return(
        <div className="Background">
            <Dropdown setCountry={(country) => setCountry(country)}
                      countries={countriesList}/>
        </div>
    )

};

export default MainContainer;
