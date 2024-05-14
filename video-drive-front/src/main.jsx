import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, Form, RouterProvider } from "react-router-dom";
import {Panier} from "./Panier.jsx";
import {ButtonAppBar} from "./AppBar.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/panier",
        element: <Panier />,
    }
]);
ReactDOM.createRoot(document.getElementById('root')).render(


  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
