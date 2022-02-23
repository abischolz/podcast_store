import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import App from './App';
import { initializeApp } from 'firebase/app';

const { Client } = require('podcast-api');
// eslint-disable-next-line import/prefer-default-export
export const client = Client({ apiKey: process.env.PODCAST_API_KEY });
const firebaseConfig = {
  apiKey: 'AIzaSyDRoiNxrE02rSKl_WDsicYU6GINW9q4N1g',
  authDomain: 'podcast-store-cb378.firebaseapp.com',
  projectId: 'podcast-store-cb378',
  storageBucket: 'podcast-store-cb378.appspot.com',
  messagingSenderId: '554407495542',
  appId: '1:554407495542:web:837ecde86043eeb9fb1c57',
};
// eslint-disable-next-line no-unused-vars

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  // eslint-disable-next-line no-undef
  // eslint-disable-next-line comma-dangle
  document.getElementById('app')
);
