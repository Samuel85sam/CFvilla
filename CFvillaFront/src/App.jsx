import mainRouter from "./main-router";
import guestRouter from "./guest-router";
import { RouterProvider } from "react-router-dom";
import './App.css';
import { useEffect, useState } from "react";
import axios from 'axios'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null)

  useEffect(
    () => {
      try {
        const localStorageUserData = JSON.parse(localStorage.getItem('currentUser'))
        if (localStorageUserData.isAuthenticated) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${localStorageUserData.jwt}`;
          console.log('user logged')
          setIsAuthenticated(true)
        }
        else {
          setIsAuthenticated(false)
        }
      }
      catch (err) {
        console.log('user NOT logged', err)
      }
    },
    []
  )
  isAuthenticated ? console.log('yes') : console.log('no')

  isAuthenticated === null && <>loading</>

  return (
    <>
      {isAuthenticated ? '-------------ADMIN-----------------' : '-------------GUEST-----------------'}
      {isAuthenticated ? <RouterProvider router={mainRouter} /> : <RouterProvider router={guestRouter} />}
    </>
  )
}

export default App
