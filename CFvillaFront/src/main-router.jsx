import React from 'react'
import Index from './routes/back-office';
import Auth from './routes/back-office/auth';
import ImgList from './routes/back-office/img-list';
import NavBar from './routes/back-office/nav-bar';
import PostForm from './routes/back-office/post-form';
import PostList from './routes/back-office/post-list';
import UpdatePost from './components/postForm/update-post';

import {
  createBrowserRouter,
} from "react-router-dom";

const  mainRouter = createBrowserRouter([{
  path: "/",
    element: <Index />,
    errorElement: <div>ROOT Oops! There was an error.</div>,
    exact: true,//← !!! pour éviter que chaque url inconnue se retrouve là
}, {
  path: "auth",
  element: <Auth />,
  errorElement: <div>ROOT Oops! There was an error.</div>,
},
{
  path: "imgList",
  element: <ImgList />,
  errorElement: <div>ROOT Oops! There was an error.</div>,
},
{
  path: "navBar",
  element: <NavBar />,
  errorElement: <div>ROOT Oops! There was an error.</div>,
},
{
  path: "postForm",
  element: <PostForm />,
  errorElement: <div>ROOT Oops! There was an error.</div>,
},
{
  path: "updatePost",
  element: <UpdatePost />,
  errorElement: <div>ROOT Oops! There was an error.</div>,
},
{
  path: "postList",
  element: <PostList />,
  errorElement: <div>ROOT Oops! There was an error.</div>,
},]
)

export default mainRouter