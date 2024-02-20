import mainRouter from "./main-router";
import { RouterProvider } from "react-router-dom";
import React, { useEffect } from "react";
import axios from 'axios'
import { useAuthStore } from "./store-zustand/authStore";
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import '@mantine/dates/styles.css';


function App() {
  const token = useAuthStore(state => state.jwt)
  useEffect(() => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    } else {
      console.log('NO Bearer !!!');

      delete axios.defaults.headers.common.Authorization
    }

  }, [token])

  return (
    <>
      <MantineProvider>
        <RouterProvider router={mainRouter} />
      </MantineProvider>
    </>
  )
}

export default App
