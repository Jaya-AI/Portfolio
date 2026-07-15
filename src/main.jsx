import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import Portfolio from '../jayesh-portfolio.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <Portfolio />
      <Toaster position="top-right" toastOptions={{ duration: 4000, style: { background: '#0f172a', color: '#fff', borderRadius: '12px' } }} />
    </>
  </React.StrictMode>
);
