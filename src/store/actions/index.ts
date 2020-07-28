import * as actions from './ActionTypes';
import axios from 'axios';

export const fetchCountries = () => {
    return function (dispatch: any) {
        axios.get('https://api.covid19api.com/countries\n')
            .then(res => {
                dispatch(setCountry(res.data));
            })
            .catch(err => {
                //handle error
            })
    }
};

export const setCountry = (country: string) => {
    return (dispatch: (arg0: { type: any; payload: any; }) => void) => {
        dispatch({
            type: actions.SET_COUNTRY,
            payload: country
        });
    };
};
