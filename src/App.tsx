import React from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import MainContainer from './containers/MainContainer';
import './App.css';
import Backgound from './components/Background';

function App() {
    return (
        <>
            <Provider store={store.store}>
                <PersistGate loading={null} persistor={store.persistedStore}>
                   <MainContainer/>
                   {/*<Backgound/>*/}
                </PersistGate>
            </Provider>
        </>
    );
}

export default App;
