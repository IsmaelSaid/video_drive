import {ButtonAppBar} from "./AppBar.jsx";
import React, {useContext} from "react";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import Button from "@mui/material/Button";
import {PanierContext} from "./main.jsx";
import {IconButton} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {useNavigate} from "react-router-dom";
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";


export function Panier() {
    const {panier, setPanier} = useContext(PanierContext);
    const navigate = useNavigate();


    return (
        <div style={{height: '100vh', flexDirection: "column", display: "flex"}}>
            <ButtonAppBar></ButtonAppBar>
            <div style={{height: '100%', display: "flex", flexDirection: "column", justifyContent: "space-between"}}>

                <div style={{display: "flex", justifyContent: "center"}}>
                    <div style={{width: '800px'}}>
                        <Typography variant="h5" component="div" sx={{flexGrow: 1}}>
                            Votre panier
                        </Typography>
                        {panier.length ?
                            (<TableContainer style={{padding: "20px"}} component={Paper}>
                                <Table aria-label={'sample table'}>
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
                                                <TableCell>{(product.price).toLocaleString("fr-FR", {
                                                    style: "currency",
                                                    currency: "EUR"
                                                })}</TableCell>
                                                <TableCell>{product.quantity}</TableCell>
                                                <TableCell>{(product.quantity * product.price).toLocaleString("fr-FR", {
                                                    style: "currency",
                                                    currency: "EUR"
                                                })}</TableCell>
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


                </div>
                {panier.length != 0 ?
                    (<div style={{}}>
                        <div style={{display: "flex", alignItems: "stretch", flexDirection: "column"}}>


                            <Button variant="contained" color="success" onClick={(e) => {
                                navigate("/paiement")
                            }}>Total
                                : {(panier.reduce((acc, product) => acc + (product.price * product.quantity), 0)).toLocaleString("fr-FR", {
                                    style: "currency",
                                    currency: "EUR"
                                })
                                }</Button>

                        </div>

                    </div>)
                    :
                    null
                }
            </div>


        </div>)
}
