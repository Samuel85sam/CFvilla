import React from 'react'
import Index from './routes/back-office/index-admin';
import PostItem from './routes/back-office/post-item';
import { createBrowserRouter } from "react-router-dom";

const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <div>/ ROOT Oops! There was an error.</div>,
    exact: true,//← !!! pour éviter que chaque url inconnue se retrouve là
  },
  {
    path: "/posts/:id",
    element: <PostItem />,
    errorElement: <div>/posts/:id ROOT Oops! There was an error.</div>,
  },
])

export default mainRouter