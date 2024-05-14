import {ButtonAppBar} from "./AppBar.jsx";
import React, {useContext} from "react";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import Button from "@mui/material/Button";
import {PanierContext} from "./main.jsx";
import {IconButton} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export function Panier() {
    const {panier, setPanier} = useContext(PanierContext);


    return (
        <div>
            <ButtonAppBar></ButtonAppBar>
            <h1>Votre panier</h1>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div style={{display: "flex", justifyContent: "space-around", width: '80%'}}>
                    <div>
                        {panier ?
                            (<TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Product ID</TableCell>
                                            <TableCell>Nom</TableCell>
                                            <TableCell>Marque</TableCell>
                                            <TableCell>Prix</TableCell>
                                            <TableCell>Quantité</TableCell>
                                            <TableCell>Sous-total</TableCell>
                                            <TableCell>Supprimer</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {panier.map((product, index) => {
                                            return <TableRow key={index}>
                                                <TableCell>{product.id}</TableCell>
                                                <TableCell>{product.name}</TableCell>
                                                <TableCell>{product.brand}</TableCell>
                                                <TableCell>{product.price}</TableCell>
                                                <TableCell>{product.quantity}</TableCell>
                                                <TableCell>{product.quantity * product.price}</TableCell>
                                                <TableCell><IconButton size={"small"} onClick={(e) => {
                                                    setPanier(panier.toSpliced(panier.findIndex((p) => p.id === product.id), 1))
                                                }}> <DeleteIcon/>
                                                </IconButton></TableCell>

                                            </TableRow>
                                        })}
                                    </TableBody>

                                </Table>

                            </TableContainer>)
                            :
                            <div>Votre panier est vide</div>}

                    </div>
                    {panier ?
                        <div style={{display: "flex", flexDirection: "column", alignItems: 'center'}}>
                            <div style={{display: "flex", flexDirection: 'column', alignItems: "center"}}>
                                <h2>Total</h2>
                                <h3>{panier.reduce((acc, product) => acc + (product.price * product.quantity), 0)}</h3>

                            </div>

                            <div>
                                <Button>
                                    COMMANDER
                                </Button>

                            </div>
                        </div>


                        :
                        null
                    }


                </div>


            </div>

        </div>)
}