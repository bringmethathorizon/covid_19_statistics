import * as actions from './ActionTypes';
import axios from 'axios';
import {CountryInterface} from "../../interfaces/CountryInterface";

export const fetchCountries = () => {
    return async (dispatch: any) => {
        try {
            const res = await axios.get(`https://api.covid19api.com/countries`);
            dispatch(setCountries(res.data));
        }catch  {
            //handle error
        }
    }
};

export const setCountries = (countries: CountryInterface) => {
    return (dispatch: (arg0: { type: string; payload: any }) => void) => {
        dispatch({
            type: actions.SET_COUNTRIES,
            payload: countries
        });
    };
};


export const setCountry = (country: string) => {
    return (dispatch: (arg0: { type: any; payload: any; }) => void) => {
        dispatch({
            type: actions.SET_COUNTRY,
            payload: country
        });
    };
};
