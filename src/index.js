import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
// import * as serviceWorker from './serviceWorker';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDih4335GHQHSYyXt6lY7U6JlH9U1kc35k",
  authDomain: "cart-a6c2e.firebaseapp.com",
  projectId: "cart-a6c2e",
  storageBucket: "cart-a6c2e.appspot.com",
  messagingSenderId: "607048115890",
  appId: "1:607048115890:web:3861deef7a2553664e8bab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

