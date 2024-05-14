import React, {createContext, useState} from 'react'
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
export const PanierContext = React.createContext();
function Main() {
    const [panier, setPanier] = useState([]);


    return (
        <React.StrictMode>
            <PanierContext.Provider value={{ panier, setPanier }}>
                <RouterProvider router={router} />
            </PanierContext.Provider>
        </React.StrictMode>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);