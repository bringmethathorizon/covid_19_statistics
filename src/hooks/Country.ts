import {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {StateInterface} from "../interfaces/StateInterface";
// import * as actions from '../store/actions/ActionTypes';
import {ActionsCreators} from '../store/actions/ActionsCreators';

export const Country = () => {
    const dispatch = useDispatch();
    const country = useSelector((state: { covid: StateInterface }) => {
        return state.covid.country;
    });
    const setCountry = (country: string) => dispatch(ActionsCreators.setCountry(country));

    useEffect(() => {
        if(!country) {
            dispatch(ActionsCreators.setCountry('kyrgyzstan'));
        }
    }, [country, dispatch]);

    return { country, setCountry };
};
