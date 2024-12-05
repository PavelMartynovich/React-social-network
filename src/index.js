
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './data/redux-store';
import MyContext from './contenContext';
import reportWebVitals from './reportWebVitals';
import { Provider } from './contenContext';

// Получаем текущее состояние
const state = store.getState();

// Теперь можно получить profilePage и dialogsPage
console.log(state.profilePage); // выведет состояние из редьюсера dialogs-reducer
console.log(state.dialogsPage); // выведет состояние из редьюсера profile-reducer


const root = ReactDOM.createRoot(document.getElementById('root'));

let RenderApp=()=>
{

  root.render(

    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>

  );
  
}
RenderApp(store.getState());
store.subscribe(RenderApp)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
