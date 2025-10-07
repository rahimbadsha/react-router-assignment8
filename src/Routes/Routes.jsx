import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../components/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    Component: Root,
    children: [
        {
            index: true,
            loader:()=>fetch('apps.json'),
            path: '/',
            Component: Home
        }
    ]
  },
]);