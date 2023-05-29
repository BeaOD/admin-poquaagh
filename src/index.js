import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import Main from './addproducts/main';
import reportWebVitals from './reportWebVitals';
import { legacy_createStore as createStore ,applyMiddleware } from 'redux';
import pReducers from './store/pReducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


const myproductStore = createStore(pReducers, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Provider store={myproductStore}>
     <App />
    </Provider>
   

);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
