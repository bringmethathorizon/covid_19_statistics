import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import thunk from 'redux-thunk';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import SeamlessImmutable from 'seamless-immutable';
import {StateInterface} from "../interfaces/StateInterface";
import rootReducer from './reducers/RootReducer';
import SetTransform from '../other/SetTransform';

const persistConfig = {
    key: 'root',
    storage: storage,
    transforms: [SetTransform]
};

const configureStore = (initialState?: { covid: SeamlessImmutable.Immutable<StateInterface> }) => {
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(persistedReducer, initialState, (applyMiddleware(thunk, thunkMiddleware)));
  let persistedStore = persistStore(store);

    return { store, persistedStore }
};


const store = configureStore();

export default store;
