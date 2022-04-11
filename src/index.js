import React from 'react';
<<<<<<< HEAD
import { createRoot } from 'react-dom/client';
=======
>>>>>>> 21addc99d79ef2136424a5fcf25d0b61f21d8949
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

<<<<<<< HEAD
const container = document.getElementById('root');
// const root = createRoot(container);
=======

>>>>>>> 21addc99d79ef2136424a5fcf25d0b61f21d8949
const root = ReactDOMClient.createRoot(document.getElementById('root'));

// Initial render: Render an element to the root.
root.render( 
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
