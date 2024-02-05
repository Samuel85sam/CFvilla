import mainRouter from "./main-router";
import guestRouter from "./guest-router";
import { RouterProvider } from "react-router-dom";
import './App.css';
import { useEffect, useState } from "react";
import axios from 'axios'

function App() {
  return (
    <>
       <RouterProvider router={mainRouter} /> 
    </>
  )
}

export default App
