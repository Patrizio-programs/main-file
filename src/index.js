import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'swiper/css';
import "swiper/css/pagination";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-modal-video/scss/modal-video.scss';
import './assets/sass/style.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


