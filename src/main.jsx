import { StrictMode } from 'react'
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { store } from './Redux/store.js';
import './index.css'
import App from './App.jsx'

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);