import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const element = document.getElementById('root') as HTMLElement;
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const root = createRoot(element);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // <RouterProvider router={ router } />
);


