
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './data/redux-store';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { SamuraiJSapp } from './App';

// Получаем текущее состояние
const state = store.getState();

// Теперь можно получить profilePage и dialogsPage



const root = ReactDOM.createRoot(document.getElementById('root'));


  root.render(

    <SamuraiJSapp/>

  );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
