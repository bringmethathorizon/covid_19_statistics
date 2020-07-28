import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as actions from '../store/actions';
import {StateInterface} from "../interfaces/StateInterface";

export const ListOfCountries =  () => {
    const dispatch = useDispatch();
    const countriesList = useSelector((state: { covid: StateInterface }) => {
        return state.covid.countries
    });


    useEffect(() => {
        dispatch(actions.fetchCountries());
    }, [dispatch]);

    return countriesList;
};

