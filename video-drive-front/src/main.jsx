import React, {createContext, useState} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, Form, RouterProvider} from "react-router-dom";
import {Panier} from "./Panier.jsx";
import {ButtonAppBar} from "./AppBar.jsx";
import {StripePaymentProcess} from "./StripePaymentProcess.jsx";
import {createTheme, ThemeProvider} from "@mui/material";
import {Apropos} from "./Apropos.jsx";
import {Contact} from "./Contact.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/panier",
        element: <Panier/>,
    },
    {
        path: "/paiement",
        element: <StripePaymentProcess/>,
    },
    {
        path: "/about",
        element: <Apropos/>,
    },
    {
        path: "/contact",
        element: <Contact/>,
    }
]);
export const PanierContext = React.createContext();

function Main() {
    const [panier, setPanier] = useState([]);
    const theme = createTheme({
        typography: {
            fontFamily: [
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
        },
    });


    return (
        <React.StrictMode>
            <ThemeProvider theme={theme}>
                <PanierContext.Provider value={{panier, setPanier}}>
                    <RouterProvider router={router}/>
                </PanierContext.Provider>
            </ThemeProvider>
        </React.StrictMode>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main/>);