import {ButtonAppBar} from "./AppBar.jsx";
import React from "react";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import Button from "@mui/material/Button";

export function Panier() {

    return (
        <div>
            <ButtonAppBar></ButtonAppBar>
            <h1>Votre panier</h1>
            <div style={{display: 'flex', justifyContent : 'center'}}>
                <div style={{display : "flex", justifyContent : "space-around", width : '80%'}}>
                    <div>
                        {localStorage.getItem('panier') ?
                            (<TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Product ID</TableCell>
                                            <TableCell>Nom</TableCell>
                                            <TableCell>Marque</TableCell>
                                            <TableCell>Prix</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {JSON.parse(localStorage.getItem('panier')).map((product, index) => {
                                            return <TableRow key={index}>
                                                <TableCell>{product.ProductID}</TableCell>
                                                <TableCell>{product.Name}</TableCell>
                                                <TableCell>{product.Brand}</TableCell>
                                                <TableCell>{product.price}</TableCell>
                                            </TableRow>
                                        })}
                                    </TableBody>

                                </Table>

                            </TableContainer>)
                            :
                            <div>Votre panier est vide</div>}

                    </div>
                            {localStorage.getItem('panier') ?
                                <div style ={{display : "flex", flexDirection : "column", alignItems : 'center'}}>
                                    <div style = {{display : "flex",flexDirection: 'column',alignItems :"center"}}>
                                    <h2>Total</h2>
                                    <h3>{JSON.parse(localStorage.getItem('panier')).reduce((acc, product) => acc + product.price, 0)}</h3>

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