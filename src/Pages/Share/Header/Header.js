import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from "../../../Images/logo-tech.png"
import useAllContext from '../../hook/useAllContext';


const Header = () => {
    const {auth,handlerToLogOutUser}=useAllContext();
    const handlerToLogOut = ()=>{
        handlerToLogOutUser(auth.email)
    }
    return (
        <Box  sx={{ flexGrow: 1 }}>
        <AppBar style={{backgroundColor:"#182f59",}} position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
             
            </IconButton>
            <Typography style={{textAlign:"start",width:"50%"}}  component="div" sx={{ flexGrow: 1 }}>
             <img style={{width:"30%"}} src={logo} alt="" />
            </Typography>
            {
               auth?.email && <>{ auth?.email}<Button onClick={handlerToLogOut} color="inherit">Log Out</Button></>
           }
            
          </Toolbar>
        </AppBar>
      </Box>
    );
};

export default Header;