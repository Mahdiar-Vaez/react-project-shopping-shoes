import {
  Typography,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Icon,
} from "@mui/material";
import "./style.css";
import React from "react";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";

export default function Home() {
  return (
    <main
      style={{
        marginTop: "100px",
        padding: "80px 5%",

        backgroundColor: "rgb(18,18,18)",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "600px",
          borderRadius: "30px",
          display: "flex",
          justifyContent: "space-between",
          background:
            "linear-gradient(72.3deg, rgb(29, 7, 64) 8.5%, rgb(253, 105, 139) 92.2%)",
        }}
      >
        <Box
          height={500}
          textAlign={"center"}
          sx={{
            width: "50%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
          p={5}
        >
          <Typography
            color={"white"}
            fontSize={"50px"}
            fontWeight={900}
            variant="h3"
          >
            Website for all shoes you need
          </Typography>
          <Typography color={"white"} variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            ipsam nam placeat, ullam fugit unde molestiae laboriosam eligendi!
            Id in pariatur maiores magnam, quibusdam delectus! Ea ullam non
            aliquam, tempora explicabo itaque quidem eum quod corrupti, est,
            debitis laboriosam cumque!
          </Typography>
        </Box>
        <Box p={5} sx={{}}>
          <img width={800} height={500} src="assets/SHOESvECTOR.jpg" />
        </Box>
      </Box>
      <Typography my={5} fontWeight={900} color={"secondary"} textAlign={"center"} variant="h2">
        Our Great Features
      </Typography>
      <Typography
        my={5}
        color={"secondary"}
        textAlign={"center"}
        fontSize={24}
        variant="body2"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        placeat at, ut minus unde a!
      </Typography>
      <div
        style={{
          padding: "50px 5%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          position: "relative",
          width: "100%",
          height: "500px",
        }}
        className="cards"
      >
        <div className="overlay"></div>
        <Box
          gap={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            zIndex: "2",
          }}
        >
          <Card
            sx={{
              maxWidth: 345,
              background:
                "linear-gradient(72.3deg, rgb(29, 7, 64) 8.5%, rgb(253, 105, 139) 92.2%)",
            }}
          >
            <CardContent>
              <AccessTimeIcon
                sx={{ textAlign: "center" }}
                color="secondary"
                fontSize="large"
              />
              <Typography
                textAlign={"center"}
                color={"white"}
                gutterBottom
                variant="h5"
                component="div"
              >
                Save times
              </Typography>
              <Typography textAlign={"center"} variant="body2" color="white">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="secondary" size="small">
                Share
              </Button>
              <Button variant="contained" color="secondary" size="small">
                Learn More
              </Button>
            </CardActions>
          </Card>
          <Card
            sx={{
              maxWidth: 345,
              background:
                "linear-gradient(72.3deg, rgb(29, 7, 64) 8.5%, rgb(253, 105, 139) 92.2%)",
            }}
          >
            <CardContent>
              <AddReactionIcon
                sx={{ textAlign: "center" }}
                color="secondary"
                fontSize="large"
              />
              <Typography
                textAlign={"center"}
                color={"white"}
                gutterBottom
                variant="h5"
                component="div"
              >
                User friendly
              </Typography>
              <Typography textAlign={"center"} variant="body2" color="white">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="secondary" size="small">
                Share
              </Button>
              <Button variant="contained" color="secondary" size="small">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Box>
        <Box
          sx={{
            zIndex: "2",
          }}
        >
          <Card
            sx={{
              maxWidth: 345,
              display: "flex",
              flexDirection: "column-reverse",
              background:
                "linear-gradient(72.3deg, rgb(29, 7, 64) 8.5%, rgb(253, 105, 139) 92.2%)",
            }}
          >
            <CardMedia
              sx={{
                height: 350,
                objectFit: "contain",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                width={200}
                height={250}
                style={{}}
                src="assets/phone.png"
                alt=""
              />
            </CardMedia>

            <CardContent>
              <Typography
                textAlign={"center"}
                color={"white"}
                gutterBottom
                variant="h5"
                component="div"
              >
                iOS & Android App
              </Typography>
              <Typography textAlign={"center"} variant="body2" color="white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maiores, unde!
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box
          gap={3}
          sx={{
            zIndex: "2",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Card
            sx={{
              maxWidth: 345,
              background:
                "linear-gradient(72.3deg, rgb(29, 7, 64) 8.5%, rgb(253, 105, 139) 92.2%)",
            }}
          >
            <CardContent>
              <AirportShuttleIcon
                sx={{ textAlign: "center" }}
                color="secondary"
                fontSize="large"
              />
              <Typography
                textAlign={"center"}
                color={"white"}
                gutterBottom
                variant="h5"
                component="div"
              >
                Fast Delivery
              </Typography>
              <Typography textAlign={"center"} variant="body2" color="white">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="secondary" size="small">
                Share
              </Button>
              <Button variant="contained" color="secondary" size="small">
                Learn More
              </Button>
            </CardActions>
          </Card>
          <Card
            sx={{
              maxWidth: 345,
              background:
                "linear-gradient(72.3deg, rgb(29, 7, 64) 8.5%, rgb(253, 105, 139) 92.2%)",
            }}
          >
            <CardContent>
              <BuildCircleIcon
                sx={{ textAlign: "center" }}
                color="secondary"
                fontSize="large"
              />
              <Typography
                textAlign={"center"}
                color={"white"}
                gutterBottom
                variant="h5"
                component="div"
              >
                Warranty for all
              </Typography>
              <Typography textAlign={"center"} variant="body2" color="white">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="secondary" size="small">
                Share
              </Button>
              <Button variant="contained" color="secondary" size="small">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Box>
      </div>
      <div
        style={{
          marginTop: "40px",
          width: "100%",
          display:'flex',
          justifyContent:'space-between',
          alignItems:'center',
          gap:'40px'
        }}
      >
        <Box
          sx={{
            width: "50%",
          }}
        >
          <img
            style={{
              maxWidth: "600px",
            }}
            src="assets/backGrrond.png"
            alt=""
          />
        </Box>
        <Box sx={{
          display:'flex',
          flexDirection:'column',
          justifyContent:'center'
          ,gap:'10px'
        }}>
          <Typography fontWeight={900} color={"secondary"} variant="h3">
            Unified product catalog
          </Typography>

          <Typography color={"secondary"} fontSize={20} variant="body2">
            Manage, edit, and sync product information across all your sales
            channels—lightning fast.
          </Typography>
          <Stack spacing={2} direction={"row"}>
            <CheckBoxIcon color="success" fontSize="medium" />
            <Typography color="white"  fontSize={18} variant="body2">
            Inventory management
            </Typography>

          </Stack>
          <Stack spacing={2} direction={"row"}>
            <CheckBoxIcon color="success" fontSize="medium" />
            <Typography fontSize={18} color="white" variant="body2">
            Dynamic bundles
            </Typography>
            
          </Stack>
          <Stack spacing={2} direction={"row"}>
            <CheckBoxIcon color="success" fontSize="medium" />
            <Typography fontSize={18} color="white" variant="body2">
            Purchase orders
            </Typography>
            
          </Stack>
          <Stack spacing={2} direction={"row"}>
            <CheckBoxIcon color="success" fontSize="medium" />
            <Typography fontSize={18} color="white" variant="body2">
            Team collaboration
            </Typography>
            
          </Stack>
          <Stack spacing={2} direction={"row"}>
            <CheckBoxIcon color="success" fontSize="medium" />
            <Typography fontSize={18} color="white" variant="body2">
            Team collaboration
            </Typography>
            
          </Stack>
          <Stack spacing={2} direction={"row"}>
            <CheckBoxIcon color="success" fontSize="medium" />
            <Typography fontSize={18} color="white" variant="body2">
            Dashboard insights
            </Typography>
            
          </Stack>
  
        
        </Box>
      
       
      </div>
      <div>
       
        <Typography my={10} textAlign={'center'} variant="h3" fontWeight={900}>Trusted by worldwide largest companies</Typography>
      
        <div style={{
          display:'flex',
          justifyContent:'space-evenly'
        }} className="companies">
        <img loading="lazy" src="https://assets-global.website-files.com/65a145bf5d6be8380af14e40/65a145bf5d6be8380af14e93_4.png" alt=""/>
        <img width="240" loading="lazy" alt="" src="https://assets-global.website-files.com/65a145bf5d6be8380af14e40/65a145bf5d6be8380af14e91_2.png"/>
        <img loading="lazy" src="https://assets-global.website-files.com/65a145bf5d6be8380af14e40/65a145bf5d6be8380af14e94_2-1.png" alt=""/>
        <img loading="lazy" src="https://assets-global.website-files.com/65a145bf5d6be8380af14e40/65a145bf5d6be8380af14e92_3.png" alt=""/>
        <img loading="lazy" src="https://assets-global.website-files.com/65a145bf5d6be8380af14e40/65a145bf5d6be8380af14e90_1.png" alt=""/>
        </div>
      </div>
    </main>
  );
}
