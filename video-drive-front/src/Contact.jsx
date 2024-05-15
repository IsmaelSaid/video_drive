import React from 'react';
import {ButtonAppBar} from "./AppBar.jsx";
import {FormControl, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {Mail} from "@mui/icons-material";

export function Contact() {
    return (
        <div style={{height: "100vh", display: "flex", flexDirection: 'column', justifyContent: "center"}}>
            <ButtonAppBar></ButtonAppBar>
            <div style={{
                height: '100%',
                border: '1px solid black',
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <div style={{
                    height: "75%",
                    width: "400px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "white",
                    padding: "20px",
                }}>
                    <h1>Nous envoyer un message</h1>
                    <div style={{ height : "100%", display : "flex", justifyContent : "center", flexDirection : "column"}}>
                        <form style={{display: "flex", flexDirection: "column"}}>
                            <Box>
                                <FormControl style={{marginBottom: '20px'}} fullWidth>
                                    <TextField id="standard-basic" label="nom" variant="filled"/>
                                </FormControl>


                                <FormControl style={{marginBottom: '20px'}} fullWidth>
                                    <TextField id="standard-basic" label="prenom" variant="filled"/>
                                </FormControl>

                                <FormControl style={{marginBottom: '20px'}} fullWidth>
                                    <TextField id="standard-basic" label="email" variant="filled"/>
                                </FormControl>

                                <FormControl style={{marginBottom: '20px'}} fullWidth>
                                    <TextField
                                        id="filled-multiline-static"
                                        label="Votre message"
                                        multiline
                                        rows={5}
                                        variant="filled"
                                    />
                                </FormControl>


                                <Button>
                                    Envoyer

                                </Button>
                            </Box>
                        </form>


                    </div>
                </div>

                <div style={{
                    height: "75%",
                    width: "400px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "lightcyan",
                    padding: "20px",
                }}>

                    <h1>Nous contacter</h1>
                    <div style={{height: "100%", display : "flex"}}>
                        <ul style={{listStyleType: "none", display : "flex", justifyContent : "center", flexDirection:"column"}}>

                            <li style={{display: "flex", alignItems: "center", marginBottom : "20px"}}>
                                <LocationOnIcon/>
                                <span>3 rue de la République, 97417 Saint Denis, La Réunion</span>
                            </li>
                            <li style={{display: "flex", alignItems: "center", marginBottom : "20px"}}>
                                <PhoneEnabledIcon/>
                                <span>06934123456</span>
                            </li>
                            <li style={{display: "flex", alignItems: "center", marginBottom : "20px"}}>
                                <Mail/>
                                <span>admin@videodrive.fr</span>
                            </li>
                            <li style={{display: "flex", alignItems: "center", marginBottom : "20px"}}>
                                <LinkedInIcon/>
                                <span>/linkedin/vd</span>
                            </li>

                        </ul>

                    </div>


                </div>


            </div>

        </div>
    );
}