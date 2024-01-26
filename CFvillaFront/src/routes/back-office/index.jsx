import { React, useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { useAuthStore } from "../../store-zustand/authStore";
import Auth from "./auth";
import { Button } from '@mui/material';




const Index = () => {

  const test = useAuthStore.persist
  console.log('test', test);

  const logOut = () => {
    const localStorage = window.localStorage;
    return localStorage.clear()
  }


  // useEffect(() => {
  //   if (logged) {
  //     setisLoggedIn(true);
  //     console.log('User LOGGED !!!');
  //   } else {
  //     setisLoggedIn(false);
  //     console.log('User NOT logged !!!');

  //   }
  // }, [logged])

  return (
    <>
      {/* {isLoggedIn ? <ListPost /> : <Auth />}
      <Button color='primary'
        onClick={logOut}
        fullwidth={'false'}
        size='medium'>Se deconnecter
      </Button> */}
    </>
  )
}

export default Index