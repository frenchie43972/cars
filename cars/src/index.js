import 'bulma/css/bulma.css';
import './styles.css';
import React from "react";
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import { store } from './store';
import App from './App';

const el = document.getElementById('root');
const root = createRoot(el);

root.render(
  // The Provider component is a higher-order component thay allows
  // other React components access to the Redux store. the 'store' 
  // prop is the store that holds the state of the application
  <Provider store={store}>
    <App />
  </Provider>
);