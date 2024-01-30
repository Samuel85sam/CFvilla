import { React, useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { useAuthStore } from "../../store-zustand/authStore";
import Auth from "./auth";
import { Button } from '@mui/material';
import PostList from './post-list'





const Index = () => {

  const [isLoggedIn, setisLoggedIn] = useState(false);
  // const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  const isAuthenticated = true
  const setInitialState = useAuthStore((state) => state.logout)
  const navigate = useNavigate()
  const logout = () => {
    setInitialState()
  }
  const auth = () => {
    navigate('/auth')
  } 
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
    
      {isLoggedIn ? <PostList /> :<Auth />}

      <div id='logoutButton'>
        <Button color='primary'
          onClick={logout}
          fullwidth={'false'}
          size='medium'>
            {isAuthenticated ? "se Déconnecter " : ""}
          </Button>
      </div>
    </>
  )
}

export default Index