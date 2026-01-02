import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import routes from './router/router.jsx';
import './index.css';
import { RouterProvider } from 'react-router';

createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes} />
);
