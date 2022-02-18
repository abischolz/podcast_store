import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import App from './App';

const { Client } = require('podcast-api');
export const client = Client({ apiKey: process.env.PODCAST_API_KEY });

// eslint-disable-next-line no-unused-vars

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  // eslint-disable-next-line no-undef
  // eslint-disable-next-line comma-dangle
  document.getElementById('app')
);
