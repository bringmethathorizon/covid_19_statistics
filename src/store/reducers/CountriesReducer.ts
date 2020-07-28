import {StateInterface} from '../../interfaces/StateInterface';
import SeamlessImmutable from 'seamless-immutable';
import Immutable from 'seamless-immutable';
import * as actions from '../actions/ActionTypes';

const initialState: SeamlessImmutable.Immutable<StateInterface> = Immutable({
    results: [],
    country: '',
    countries: [],
});


const covid = (
    state: SeamlessImmutable.Immutable<StateInterface> = initialState,
    action: any
): SeamlessImmutable.Immutable<StateInterface> => {
    switch(action.type) {
        case actions.SET_COUNTRIES:
            return state.set('countries', action.payload);

        case actions.SET_COUNTRY:
            return state.set('country', action.payload);

        default: return state;
    }
};

export default covid;
