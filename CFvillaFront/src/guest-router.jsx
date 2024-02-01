import React from 'react'
import IndexGuest from './routes/public-interface/index-guest'
import Auth from './routes/public-interface/auth-landing-page'
import { createBrowserRouter } from 'react-router-dom'

const guestRouter = createBrowserRouter([
    {
        path: "/",
        element: <IndexGuest />,
        errorElement: <div>ROOT Oops! There was an error.</div>,
        exact: true,//← !!! pour éviter que chaque url inconnue se retrouve là
    },
    {
        path: "auth",
        element: <Auth />,
        errorElement: <div>ROOT Oops! There was an error.</div>,
    },

])

export default guestRouter 