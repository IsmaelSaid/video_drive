import {useNavigate} from "react-router-dom";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu.js";
import Typography from "@mui/material/Typography";
import {Badge} from "@mui/material";
import Button from "@mui/material/Button";

export function ButtonAppBar() {
    let navigate = useNavigate();

    return (<Box sx={{flexGrow: 1}}>
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{mr: 2}}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    Vidéo drive
                </Typography>
                <Button color="inherit" onClick={(e) => {
                    navigate("/")
                }}>Voir tout les produits</Button>
                <Badge badgeContent={4} color="warning">
                    <Button color="inherit" onClick={(e) => {
                        navigate("/panier")
                    }}>Panier</Button>
                </Badge>
            </Toolbar>
        </AppBar>
    </Box>);
}