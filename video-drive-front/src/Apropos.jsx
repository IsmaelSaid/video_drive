import {ButtonAppBar} from "./AppBar.jsx";
import Typography from "@mui/material/Typography";

export function Apropos() {
    return (
        <div style={{height: "100vh", display: "flex", flexDirection: "column", backgroundColor: "white"}}>
            <ButtonAppBar></ButtonAppBar>
            <div style={{display: "flex", height: "100%", justifyContent: "center"}}>

                <div style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    width: "50%",
                }}>
                    <div style={{height: '50px', backgroundImage: `url("public/background.jpeg")`}}>

                    </div>
                    <div style={{padding: "50px", fontSize: "larger"}}>
                        <Typography variant={'h3'}>
                            Notre histoire
                        </Typography>
                        <Typography>
                            Bienvenue dans l'univers palpitant des jeux vidéo, où l'aventure, l'excitation et
                            l'émerveillement vous attendent à chaque coin de pixel. Nous sommes
                            fiers d'être votre porte d'entrée vers cet univers infini de divertissement interactif. En
                            tant que leader du marché, nous nous engageons à offrir à nos clients une expérience
                            exceptionnelle, alliant innovation, passion et service de qualité.
                        </Typography>
                        <br/>
                        <Typography>
                            Plongez dans notre vaste sélection de jeux vidéo, où chaque titre est soigneusement choisi
                            pour répondre aux attentes des joueurs les plus exigeants. Que vous soyez un aventurier
                            intrépide en quête de mondes fantastiques à explorer, un compétiteur chevronné cherchant des
                            défis à relever, ou simplement un amateur de détente recherchant un divertissement ludique,
                            notre collection diversifiée saura satisfaire toutes vos envies.
                        </Typography>
                    </div>


                </div>

            </div>

        </div>
    )
}