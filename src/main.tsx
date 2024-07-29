import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import { RouterProvider } from 'react-router-dom';
import route from './routes/Route.tsx';
import { ThemeProvider } from './store/ThemeContext.tsx';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
    <RouterProvider router={route} />
    </ThemeProvider>
  </React.StrictMode>,
);
