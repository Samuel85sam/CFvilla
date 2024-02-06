import React from 'react'
import IndexAdmin from './routes/back-office/index-admin';
import PostItem from './routes/back-office/post-item';
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from './components/routes/protected-route';
import IndexGuest from './routes/public-interface/index-guest';
import Auth from './routes/public-interface/auth-landing-page';
import GuestRoute from './components/routes/guest-route';



const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <IndexGuest />,
    errorElement: <div>ROOT Oops! There was an error.</div>,
    exact: true,//← !!! pour éviter que chaque url inconnue se retrouve là
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
    exact: true,//← !!! pour éviter que chaque url inconnue se retrouve là
  },
  {
    path: "posts/:id",
    element: <ProtectedRoute><PostItem /></ProtectedRoute>,
    errorElement: <div>/posts/:id ROOT Oops! There was an error.</div>,
  },
])

export default mainRouter