import React, {useRef, useState} from 'react';
import {ButtonAppBar} from "./AppBar.jsx";
import {Alert, AlertTitle, Collapse, FormControl, IconButton, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {Mail} from "@mui/icons-material";
import emailjs from '@emailjs/browser';
import Typography from "@mui/material/Typography";
import CloseIcon from '@mui/icons-material/Close';


export function Contact() {
    const form = useRef();
    const [alert, setAlert] = useState(true);
    const [open, setOpen] = useState(false);

    const sendEmail = (e) => {
        console.log('trigger')
        e.preventDefault();

        emailjs
            .sendForm(import.meta.env.VITE_SERVICE_EMAILJS, import.meta.env.VITE_SERVICE_TEMPLATE, form.current, {
                publicKey: import.meta.env.VITE_PUBLIC_KEY_EMAILJS,
            })
            .then(
                () => {
                    console.info('SUCCESS!');
                    setOpen(true)
                },
                (error) => {
                    console.info('FAILED...', error.text);
                },
            );
    };

    return (
        <div style={{height: "100vh", display: "flex", flexDirection: 'column', justifyContent: "center"}}>
            <ButtonAppBar></ButtonAppBar>
            <div style={{
                height: '100%',
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
                    <Typography variant={'h5'}>
                        Nous envoyer un message
                    </Typography>
                    <div style={{height: "100%", display: "flex", justifyContent: "center", flexDirection: "column"}}>
                        <form ref={form} style={{display: "flex", flexDirection: "column"}} onSubmit={sendEmail}>
                            <Box>
                                <FormControl style={{marginBottom: '20px'}} fullWidth>
                                    <TextField required={true} id="standard-basic" label="Nom" name='user_name'
                                               variant="filled"/>
                                </FormControl>


                                <FormControl style={{marginBottom: '20px'}} fullWidth>
                                    <TextField required={true} id="standard-basic" label="Email" name='user_email'
                                               variant="filled"/>
                                </FormControl>

                                <FormControl style={{marginBottom: '20px'}} fullWidth>
                                    <TextField
                                        required={true}
                                        name='message'
                                        id="filled-multiline-static"
                                        label="Votre message"
                                        multiline
                                        rows={5}
                                        variant="filled"
                                    />
                                </FormControl>

                                <Button type={"submit"}>
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
                    padding: "20px",
                }}>

                    <Typography variant={'h5'}>
                        Nous contacter
                    </Typography>
                    <div style={{height: "100%", display: "flex"}}>
                        <ul style={{
                            listStyleType: "none",
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column"
                        }}>

                            <li style={{display: "flex", alignItems: "center", marginBottom: "20px"}}>
                                <LocationOnIcon/>
                                <Typography>
                                    3 Rue de la République, 97417 Saint Denis, La Réunion
                                </Typography>
                            </li>
                            <li style={{display: "flex", alignItems: "center", marginBottom: "20px"}}>
                                <PhoneEnabledIcon/>
                                <Typography>
                                    069 31 23 45 67
                                </Typography>
                            </li>
                            <li style={{display: "flex", alignItems: "center", marginBottom: "20px"}}>
                                <Mail/>

                                <Typography>admin@videodrive.fr</Typography>
                            </li>
                            <li style={{display: "flex", alignItems: "center", marginBottom: "20px"}}>
                                <LinkedInIcon/>
                                <Typography>/linkedin/vd</Typography>
                            </li>

                        </ul>

                    </div>


                </div>


            </div>
            {  <Box sx={{ width: '100%', position : 'absolute', bottom : '0px'}}>
                <Collapse in={open}>
                    <Alert
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    setOpen(false);
                                }}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                        sx={{ mb: 2 }}
                    >
                        Votre message a été envoyé avec succès
                    </Alert>
                </Collapse>
            </Box>}


        </div>
    );
}