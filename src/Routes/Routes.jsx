import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../components/Root/Root';
import Home from '../pages/Home/Home';
import AllApps from '../pages/AllApps/AllApps';
import AppDetails from '../pages/AppDetails/AppDetails';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import MyInstallation from '../pages/MyInstallation/MyInstallation';



export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Root></Root>,
    children: [
        {
            index: true,
            loader: () => fetch('/apps.json').then(res => res.json()),
            path: '/',
            Component: Home
        },
        {
            path: '/apps',
            loader: () => fetch('/apps.json').then(res => res.json()),
            Component: AllApps
        },
        {
          path: '/app-details/:id',
          Component: AppDetails,
          loader: () => fetch('/apps.json').then(res => res.json()),
        },
        {
          path: '/installation',
          Component: MyInstallation,
          loader: () => fetch('/apps.json').then(res => res.json()),
        }
    ]
  },
]);