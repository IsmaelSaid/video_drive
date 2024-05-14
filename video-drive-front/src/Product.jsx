/*
Ce composant permet d'afficher la liste des produits
*/
import {useState} from "react";
import {Card, CardActionArea, CardActions, CardContent, CardMedia} from "@mui/material";
import Button from "@mui/material/Button";

export function DisplayProducts({products}) {
    return <div style={{display: "flex", flexWrap: 'wrap'}}>
        {products.length === 0 ? <p>Aucune données</p> : products.map((product, index) => <DisplayProduct key={index}
                                                                                                          product={product}></DisplayProduct>)}
    </div>


}

/*
    Ce composant permet d'afficher un produit
*/
export function DisplayProduct({product}) {
    return (<Card sx={{minWidth: 100, maxWidth: 200}} style={{margin: '0px 20px 50px 0px'}}>
        <CardActionArea>
            <CardMedia component='img' image={product.Pic}></CardMedia>

            <CardContent>
                <p>
                    {product.Name}

                </p>
                <p>
                    {product.price}€

                </p>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary" onClick={(e) => {
                let panier = localStorage.getItem('panier');
                if (panier) {
                    panier = JSON.parse(panier);
                    panier.push(product);
                    localStorage.setItem('panier', JSON.stringify(panier))
                } else {
                    localStorage.setItem('panier', JSON.stringify([product]))
                }
            }
            }>
                Ajouter au panier
            </Button>
        </CardActions>
    </Card>)
}