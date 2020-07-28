import React from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import MainContainer from './containers/MainContainer';
import './App.css';

function App() {
    return (
        <>
            <Provider store={store.store}>
                <PersistGate loading={null} persistor={store.persistedStore}>
                   <MainContainer/>
                </PersistGate>
            </Provider>
        </>
    );
}

export default App;
