import mainRouter from "./main-router";
import guestRouter from "./guest-router";
import { React, useState, useEffect } from 'react';
import { useAuthStore } from "./store-zustand/authStore";
import { RouterProvider } from "react-router-dom";

import './App.css';

function App() {

  const [isLoggedIn, setisLoggedIn] = useState(false);

  console.log('LOGGED ??? ==> ', isLoggedIn);

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  //----------------pour utiliser seulement le local storage ↓↓↓
  //   console.log('localStorage == >', localStorage);
  //   const isAuthenticated = localStorage.getItem('authStorage')
  //   console.log(JSON.parse(isAuthenticated));
  //   const bool = JSON.parse(isAuthenticated).state.isAuthenticated
  //   console.log('bool', bool);
  //------------------------------------------------------------

  useEffect(() => {
    if (isAuthenticated == true) {
      setisLoggedIn(true);
      console.log('User LOGGED !!!');
    } else {
      setisLoggedIn(false);
      console.log('User NOT logged !!!');
    }
  }, [isAuthenticated])

  return (
    <>
      {isLoggedIn ? '-------------ADMIN-----------------' : '-------------GUEST-----------------' }
      {isLoggedIn ? <RouterProvider router={mainRouter} /> : <RouterProvider router={guestRouter} />}
    </>
  )
}

export default App
