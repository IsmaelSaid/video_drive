/*
Ce composant permet d'afficher la liste des produits
*/
import {useContext, useState} from "react";
import {Card, CardActionArea, CardActions, CardContent, CardMedia} from "@mui/material";
import Button from "@mui/material/Button";
import {PanierContext} from "./main.jsx";
import Typography from "@mui/material/Typography";

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
    const { panier, setPanier } = useContext(PanierContext);


    return (<Card style={{margin : "10px", padding : "20px"}}>
        <CardActionArea>

            <CardMedia sx={{height: 200, width: 200, objectFit: 'contain'}}
                       component='img' image={'https://127.0.0.1:8000/'+product.picture}></CardMedia>

            <CardContent>
                <Typography>
                    {product.name}

                </Typography>
                    <Typography>
                        {product.price}€
                    </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary" onClick={(e) => {
                const productIndex = panier.findIndex(p=> p.id === product.id)
            if(productIndex == -1){
                setPanier([...panier, {...product, quantity : 1}])
            }else {
                panier[productIndex].quantity += 1
                setPanier([...panier])}
            }
            }>
                Ajouter au panier
            </Button>
        </CardActions>
    </Card>)
}