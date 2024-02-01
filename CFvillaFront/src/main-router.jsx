import React from 'react'
import Index from './routes/back-office/index-admin';
import PostItem from './routes/back-office/post-item';
import { createBrowserRouter } from "react-router-dom";
import PostList from './routes/back-office/post-list';

const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <div>ROOT Oops! There was an error.</div>,
    exact: true,//← !!! pour éviter que chaque url inconnue se retrouve là
  },
  {
    path: "posts/:id",
    element: <PostItem />,
    errorElement: <div>ROOT Oops! There was an error.</div>,
  },
  {
    path: "post-list",
    element: <PostList />,
    errorElement: <div>ROOT Oops! There was an error.</div>,
  },
])

export default mainRouter