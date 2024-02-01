import React, { useContext, useState } from "react";
import {
  Stack,
  Toolbar,
  AppBar,
  Menu,
  Button,
  MenuItem,
  Fade,
  Badge,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import InventoryIcon from "@mui/icons-material/Inventory";
import { Link } from "react-router-dom";
import AuthContext from "../../utils/AuthContext";
import { motion } from "framer-motion";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from "react-redux";
export default function Navbar() {
  const { token, handleToken } = useContext(AuthContext);
  {      console.log(token);}
  const productNum=useSelector(state=>state.cart.list).length


  return (
    <AppBar
      sx={{
        // display:'flex',
        // justifyContent:'space-between',
        // alignItems:'center',
        background: "rgb(18,18,18)",
        padding: "0px 5%",
        display: "block",
        height: "100px",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Stack
          sx={{
            alignItems: "end",
            display: "flex",
            gap: "20px",
          }}
          direction={"row"}
          spacing={2}
        >
          <Link to={"/"}>
            {" "}
            <img
              src="https://assets-global.website-files.com/65a145bf5d6be8380af14e40/65a1470ac08eb8a4ac31bca4_Logo.png"
              alt=""
              class="logo"
            />
          </Link>

          <Link to={"/"}>
            <Button
              startIcon={<HomeIcon fontSize="large" />}
              variant="text"
              sx={{
                height: "50px",
              }}
              size="small"
              color="primary"
            >
              Home
            </Button>
          </Link>
          <Link to={"/contact"}>
            <Button
              startIcon={<PermContactCalendarIcon fontSize="large" />}
              sx={{
                height: "50px",
              }}
              size="small"
              variant="text"
              color="primary"
            >
              Contact
            </Button>
          </Link>
          <Link to={"/products"}>
            {" "}
            <Button
              startIcon={<InventoryIcon />}
              sx={{
                height: "50px",
              }}
              size="small"
              variant="text"
              color="primary"
            >
              Products
            </Button>
          </Link>
        </Stack>
        <Stack  direction={"row"} spacing={3}>
          {token? (
            <Button
              variant="outlined"
              sx={{
                fontWeight: "800",
              }}
              color="error"
              onClick={()=>handleToken(null)}
            >
              <span>LogOut</span>
              
            </Button>
          ) : (
           <Button 
                id="fade-button"
                variant="outlined"
                sx={{
                  fontWeight: "800",
                }}
                color="primary"
              >
                 <Link to={'/login-register'}>  Login/Register </Link>
              
              </Button>
              
           
        
          )}
          <Link to={'/cart'}>         <Badge anchorOriginTopRight badgeContent={productNum} color="error"  overlap="circular"  variant="standard">  <Button  variant="contained"  endIcon={<ShoppingCartIcon fontSize="large"/>}>cart</Button></Badge>
</Link>
          
        </Stack>

      </Toolbar>
    </AppBar>

  );

}

