import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import createStore from './redux/store';
import Router from './router';

const defaultStore = window.__STORE__ || {};
console.log(defaultStore);
const store = createStore(defaultStore);

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </Provider>
    )
}

render(<App/>, document.getElementById('app'));
