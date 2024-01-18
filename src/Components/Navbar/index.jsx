import React, { useState } from "react";
import {
  Stack,
  Toolbar,
  AppBar,
  Menu,
  Button,
  MenuItem,
  Fade,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import InventoryIcon from "@mui/icons-material/Inventory";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
              color="secondary"
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
              color="secondary"
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
              color="secondary"
            >
              Products
            </Button>
          </Link>
        </Stack>
        <Stack direction={"row"} spacing={3}>
          <Button
            id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            variant="outlined"
            sx={{
              fontWeight: "800",
            }}
            color="primary"
          >
            Login/Register
          </Button>
          <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <Link to={"/login-register"}>
              <MenuItem onClick={handleClose}>Register</MenuItem>
            </Link>
            <Link to={"/login-register"}>
              {" "}
              <MenuItem onClick={handleClose}>Login</MenuItem>
            </Link>
          </Menu>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
