import { Telegram, Token } from "@mui/icons-material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import {
  Box,
  Stack,
  Typography,
  List,
  ListItem,
  Button,
  ListItemButton,
  ListItemText,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";


export default function Footer() {
  const [fakeToken,setFakeToken]=useState('erafd')
  const [value,setValue]=useState()
  const handleFakeToken=()=>{
    setFakeToken(null)
    setValue('')
  }
  return (
    <footer
      style={{
        backgroundColor: "rgb(18,18,18)",
        padding: "20px 5%",
        background:
          " linear-gradient(90deg, rgba(2,0,36,1) 10%, rgba(88,15,82,1) 54%)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap:'wrap',
          alignItems:'center',
          flexDirection: "row",
          justifyContent: {
            xs:'center',
            md:'space-between'
          },
          gap:'20px'
        }}
      >
        <Box
          sx={{
            color: "white",
          }}
        >
          <img
            width={200}
            height={50}
            src="https://assets-global.website-files.com/65a145bf5d6be8380af14e40/65a1470ac08eb8a4ac31bca4_Logo.png"
            alt=""
            class="logo"
          />
          <Typography

            my={1}
            color={"secondary"}
            variant="subtitle1"
            fontWeight={500}
            
          >
            Adress :{" "}
          </Typography>

          <Typography my={1} color={"secondary"} variant="body2">
            2774 Oak Drive, Plattsburgh, New York{" "}
          </Typography>
          <Typography
            my={1}
            color={"secondary"}
            variant="subtitle1"
            fontWeight={500}
          >
            Contact :{" "}
          </Typography>
          <Typography my={1} color={"secondary"} variant="body2">
            +989056375314
          </Typography>
          <Typography my={1} color={"secondary"} variant="body2">
            mahdyarvaez@gmail.com
          </Typography>
          <Stack direction={"row"} spacing={2}>
            <Telegram color="info" />
            <WhatsAppIcon color="success" />
            <YouTubeIcon color="error" />
          </Stack>
        </Box>
        <Box sx={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        gap:'20px'
        }}>
          <TextField  sx={{
            color:'white',
           backgroundColor:'white'
          }} value={value} onChange={(e)=>setValue(e.target.value)}  color="secondary"  variant="filled"  label={'Enter your token '}/>
          <Button onClick={handleFakeToken} color="secondary" variant="contained">Submit</Button>
          {!fakeToken&&<Typography  color={'error'}>Token not found</Typography>}
        </Box>
        <Box sx={{
          color:'wheat',
          display:'flex',
          justifyContent:'space-evenly'
        }}>
          <Box sx={{
            
          }} width={100}>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText  primary="Contact Us" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="About Us" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Drafts" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="pricing" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="About Us" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Blog" />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
          <Box width={120}>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Sign Up" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Sign In" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Features" />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
          <Box width={100}>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Offers" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Licenses" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText color="primary" primary="Qualities" />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Box>
    </footer>
  );
}
