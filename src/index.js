import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAykMJi-1vf4vxZtS-V9qqGZwuQEWem2Gw",
  authDomain: "first-ecommerce-84124.firebaseapp.com",
  projectId: "first-ecommerce-84124",
  storageBucket: "first-ecommerce-84124.appspot.com",
  messagingSenderId: "698429123097",
  appId: "1:698429123097:web:56c3a65576f1ae23d19888"
};

initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
