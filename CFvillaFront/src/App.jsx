import mainRouter from "./main-router";
import guestRouter from "./guest-router";
import { RouterProvider } from "react-router-dom";
import './App.css';
import { useEffect, useState } from "react";
import axios from 'axios'
import { useAuthStore } from "./store-zustand/authStore";

function App() {
  const token = useAuthStore(state => state.jwt)
  useEffect(() => {
if (token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  
}else{
  console.log('NO Bearer !!!');

  delete axios.defaults.headers.common.Authorization 
}

  }, [token])

  return (
    <>
      <RouterProvider router={mainRouter} />
    </>
  )
}

export default App
