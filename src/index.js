import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//Import everything we need to hook up Redux
import reducer from './store/reducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

//Here we create our store
//A store holds the whole state tree of the application
const store = createStore(reducer);

//Store and provider added below, wrapping our app, which gives global access to app
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// Create actions with names
// Dispatch you actions into the reducer
