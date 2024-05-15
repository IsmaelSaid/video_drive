import {ButtonAppBar} from "./AppBar.jsx";
import Typography from "@mui/material/Typography";

export function Apropos() {
    return (
        <div style={{height: "100vh", border: "1px solid red", display: "flex", flexDirection: "column", backgroundColor : "white"}}>
            <ButtonAppBar></ButtonAppBar>
            <div style={{display : "flex", height : "100%", justifyContent : "center"}}>

                <div style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    width: "50%",
                }}>
                    <div style={{height : '50px', backgroundImage : `url("public/background.jpeg")` }}>

                    </div>
                    <div style={{ padding : "50px", fontSize : "larger"}}>
                        <Typography variant={'h3'}>
                            Notre histoire
                        </Typography>
                        <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque congue varius nulla vel
                            accumsan.
                            Nullam venenatis convallis nibh, vel vehicula lectus consectetur eget. Nulla quis mollis metus.
                            Aenean
                            velit magna, egestas sit amet tempus vitae, maximus lacinia nibh. Suspendisse potenti. Etiam
                            facilisis
                            molestie massa sed tempus. Nullam luctus vitae nisl non egestas. Morbi vel interdum leo, id
                            viverra
                            est.
                            Nulla at consequat nibh. Nam efficitur sed nisi eu mattis. Sed posuere enim magna, vel blandit
                            turpis
                            porta eget.
                        </Typography>
                        <br/>
                        <Typography>
                            Fusce a placerat neque. Suspendisse ut turpis dictum sapien facilisis dapibus at eu est. Proin
                            rutrum
                            libero in rutrum mollis. Nullam aliquam feugiat euismod. Aenean viverra enim nec nunc suscipit,
                            auctor
                            euismod massa pretium. In laoreet vulputate nunc et porttitor. Integer auctor, libero vel rutrum
                            ultrices, enim erat dapibus mauris, at tempor purus felis vitae metus. Sed semper felis a dui
                            maximus
                            fringilla.
                        </Typography>
                    </div>


                </div>

            </div>

        </div>
    )
}