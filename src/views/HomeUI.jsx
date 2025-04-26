import React from "react";
import{AppBar, Toolbar,IconButton,Typography,Button} from "@mui/material";
import AssistWalkerIcon from '@mui/icons-material/AssistWalker';
import { Link } from "react-router-dom";
function HomeUI() {
    return (
        <>
        <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <AssistWalkerIcon sx={{fontSize:40,color:'pink'}}/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Sorawit Leejaroen
          </Typography>
          <Button component={Link} to='contact' variant="text" color="inherit">Contact</Button>
          <Button component={Link} to='about' variant="text" color="inherit">About</Button>
        </Toolbar>
      </AppBar>
        </>
    )
}
export default HomeUI;