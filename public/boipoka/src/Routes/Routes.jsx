import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Bookdetails from '../pages/BookDetails/Bookdetails';
import ReadList from '../pages/ReadList/ReadList';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
            loader:()=>fetch('booksData.json'),
            path:'/',
            Component: Home
        },
        {
            path: '/about',
            Component:About
        },
        {
            path:'/readlist',
            loader:()=>fetch('booksData.json'),
            Component: ReadList
        },
        {
            path: '/bookDetails/:id',
            loader:()=>fetch('booksData.json'),
            Component:Bookdetails
        }
    ]
  },
]);