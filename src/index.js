import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './store/Store';
import { Provider } from 'react-redux';

import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);
