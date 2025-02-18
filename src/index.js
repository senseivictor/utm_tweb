import React from 'react';
import ReactDOM from 'react-dom/client';
import { Intro, Error, Techniques, Applications, Challenges, Conclusions } from './pages';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GlobalWrapper } from 'utilities';  // Adjust import path as needed

const router = createBrowserRouter([
  {
    path: '/',
    element: <Intro />,
    errorElement: <Error />,
  },
  {
    path: '/techniques',
    element: <Techniques />,
  },
  {
    path: '/applications',
    element: <Applications />,
  },
  {
    path: '/challenges',
    element: <Challenges />,
  },
  {
    path: '/conclusions',
    element: <Conclusions />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <GlobalWrapper>
      <RouterProvider router={router}/>
    </GlobalWrapper>
  </React.StrictMode>
);
