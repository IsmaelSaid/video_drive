import React, {useContext, useEffect, useState} from "react";
import {loadStripe} from "@stripe/stripe-js";
import {PanierContext} from "./main.jsx";

const stripePromise = loadStripe('pk_test_51OeAJeKemilxQoxQ7dxifMpCouYNNHTVL2KpMeb5V3SQsffwfOa05LyRlEd42Sv1A0TJ9AdZ79sslhcKtktOgaS100qUVWMTLW');

/**
 * Le composant Paiement gère le processus de paiement avec Stripe.
 * Il utilise le contexte du panier pour obtenir les articles à payer.
 * Lors du montage du composant, une requête est envoyée à l'API pour créer une session de paiement Stripe.
 * Si la requête est réussie, l'utilisateur est redirigé vers la page de paiement de Stripe.
 *
 * @component
 */
export function StripePaymentProcess() {

    const {panier, setPanier} = useContext(PanierContext);

    useEffect(() => {
        const raw = JSON.stringify(panier);

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch('https://127.0.0.1:8000/create_payment', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                stripePromise
                    .then((stripe) => {
                        stripe.redirectToCheckout({sessionId: data.data})
                    })

            }).catch(error => console.log('error', error));


    }, []);

    return <p>Chargement</p>
}