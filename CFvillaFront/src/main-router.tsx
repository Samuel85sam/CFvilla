import React from 'react'
import IndexAdmin from './routes/back-office/index-admin';
import PostItem from './routes/back-office/post-item/post-item';
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from './components/routes/protected-route';
import IndexGuest from './routes/public-interface/index-guest';
import Auth from './routes/back-office/auth/auth-landing-page';
import GuestRoute from './components/routes/guest-route';
import ArticleItem from './routes/public-interface/article-item/article-item';



const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <IndexGuest />,
    errorElement: <div>ROOT Oops! There was an error.</div>,
    },
  {
    path: "auth",
    element: <GuestRoute><Auth /></GuestRoute>,
    errorElement: <div>ROOT Oops! There was an error.</div>,
  },
  {
    path: "posts",
    element: <ProtectedRoute><IndexAdmin /></ProtectedRoute>,
    errorElement: <div>/ ROOT Oops! There was an error.</div>,
  },
  {
    path: "posts/:id",
    element: <ProtectedRoute><PostItem /></ProtectedRoute>,
    errorElement: <div>/posts/:id ROOT Oops! There was an error.</div>,
  },
  {
    path: "article-item/:id",
    element: <ArticleItem/>,
    errorElement: <div>/posts/:id ROOT Oops! There was an error.</div>,
  }
])

export default mainRouter