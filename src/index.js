// index.js
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes.js';
import { createRoot } from 'react-dom/client';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
