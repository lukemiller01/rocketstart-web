import React from "react";
import { createRoot } from 'react-dom/client';
import {Provider} from 'react-redux'; // Keeps track of store (global state) - allows access from anywhere inside app
import { applyMiddleware, compose, createStore } from "redux";
import reducers from './reducers/user'
import thunk from "redux-thunk";
import App from './App';
import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunk))); // Probably use the redux toolkit

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <App />
     </Provider>
);