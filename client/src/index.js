import React from "react";
import { createRoot } from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './App';
import './index.css';
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducers from './reducers';

const store = configureStore({reducer: reducers, middleware: [thunk] });

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <App />
     </Provider>
);