import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

// ✅ AOS scroll animation
import AOS from 'aos';
import 'aos/dist/aos.css';

const Root = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true, // animations happen only once per scroll
    });
  }, []);

  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
