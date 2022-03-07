import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import App from './App';
import { initializeApp } from 'firebase/app';
import { Provider } from 'react-router-dom';

const { Client } = require('podcast-api');
// eslint-disable-next-line import/prefer-default-export
export const client = Client({ apiKey: process.env.PODCAST_API_KEY });

// eslint-disable-next-line no-unused-vars

ReactDOM.render(
  <Provider>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
);
