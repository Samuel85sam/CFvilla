import * as React from "react";
import mainRouter from "./main-router";
import {
  RouterProvider,
} from "react-router-dom";

function App() {

  return (
    
      <RouterProvider router={mainRouter} />
    
  )
}

export default App
