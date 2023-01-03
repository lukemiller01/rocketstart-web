import React from "react";
import { createRoot } from 'react-dom/client';
import {Provider} from 'react-redux'; // Keeps track of store (global state) - allows access from anywhere inside app
import App from './App';
import './index.css';
import { configureStore } from "@reduxjs/toolkit";
import userReducer from './reducers/user';

const store = configureStore({reducer: { user: userReducer}});

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <App />
     </Provider>
);