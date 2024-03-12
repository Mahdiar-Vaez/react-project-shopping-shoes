import {
  Typography,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  
} from "@mui/material";
import { motion } from "framer-motion";
import "./style.css";
import React from "react";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";

export default function Home() {
  return (
    <Box
      sx={{
        marginTop: {
          xs: 18,
          md: 10,
        },
        padding: "0 5%",

        backgroundColor: "rgb(18,18,18)",
      }}
    >
      <Box
        initial={{}}
        component={motion.div}
        sx={{
          flexDirection: {
            xs: "column-reverse",
            md: "column-reverse",
            lg: "row",
          },
          alignItems: "center",
          width: "100%",
          height: "max-content",
          borderRadius: "30px",
          display: "flex",
          justifyContent: "space-evenly",
          background:
            "linear-gradient(72.3deg, rgb(29, 7, 64) 8.5%, rgb(253, 105, 139) 92.2%)",
        }}
      >
        <Box
          initial={{
         
            opacity: 0,
            visibility: 0,
            scale: 0,
          }}
          animate={{opacity: 1, visibility: "visible", scale: 1 }}
          transition={{
            duration: 1,
            ease: "easeIn",
          }}
          component={motion.div}
          height={"max-content"}
          textAlign={"center"}
          sx={{
            width: "50%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",

            justifyContent: "center",
          }}
          p={1}
        >
          <Typography
            color={"white"}
            fontWeight={900}
            variant="h3"
            sx={{
              fontSize: {
                xs: "25px",
                sm: "27px",
                md: "29px",
                lg: "31px",
                xl: "33px",
              },
            }}
          >
            Website for all shoes you need
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: "15px",
                sm: "17px",
                md: "19px",
                lg: "21px",
                xl: "23px",
              },
            }}
            my={2}
            fontSize={20}
            color={"white"}
            variant="body2"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            ipsam nam placeat, ullam fugit unde molestiae laboriosam eligendi!
            Id in pariatur maiores magnam, quibusdam delectus! Ea ullam non
            aliquam, tempora explicabo itaque quidem eum quod corrupti, est,
            debitis laboriosam cumque!
          </Typography>
        </Box>
        <Box p={2} sx={{}}>
          <Box
            initial={{
        
              opacity: 0,
              visibility: 0,
              scale: 0,
            }}
            animate={{ x: 0, opacity: 1, visibility: "visible", scale: 1 }}
            transition={{
              duration: 2,
              ease: "easeIn",
            }}
            component={motion.img}
            sx={{
              maxWidth: {
                xs: 300,
                sm: 400,
                md: 500,
                lg: 600,
              },
            }}
            src="assets/SHOESvECTOR.jpg"
          />
        </Box>
      </Box>
      <Typography
        component={motion.h2}
        initial={{
       
          opacity: 0,
          visibility: "hidden",
          scale: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
          visibility: "visible",
          scale: 1,
        }}
        transition={{
          duration: 2,
        }}
        sx={{
          fontSize: {
            xs: "22px",
            sm: "24px",
            md: "26px",
            lg: "28px",
            xl: "30px",
          },
        }}
        my={5}
        fontWeight={900}
        color={"secondary"}
        textAlign={"center"}
        variant="h2"
      >
        Our Great Features
      </Typography>
      <Typography
        sx={{
          fontSize: {
            xs: "22px",
            sm: "24px",
            md: "26px",
            lg: "28px",
            xl: "30px",
          },
        }}
        my={5}
        color={"secondary"}
        textAlign={"center"}
        fontSize={24}
        variant="body2"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        placeat at, ut minus unde a!
      </Typography>
      <Box
        sx={{
          padding: "50px 5%",
          display: "flex",
          flexDirection: {
            xs: "column",
            lg: "row",
          },
          justifyContent: "space-evenly",
          alignItems: "center",

          position: "relative",
          width: "100%",
          height: "max-content",
          gap: "10px",
        }}
        className="cards"
      >
        <div className="overlay"></div>
        <Box
          initial={{
            opacity: 0,
            visibility: "hidden",
            scale: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            visibility: "visible",
            scale: 1,
          }}
          component={motion.div}
          gap={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            zIndex: "2",
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <Card
            sx={{
              maxWidth: {
                xs: "80%",
                sm: "70%",
                md: 345,
              },
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
                sx={{
                  fontSize: {
                    xs: "25px",
                    sm: "27px",
                    md: "29px",
                    lg: "31px",
                    xl: "33px",
                  },
                }}
                component="div"
              >
                Save times
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "15px",
                    sm: "17px",
                    md: "19px",
                    lg: "21px",
                    xl: "23px",
                  },
                }}
                textAlign={"center"}
                variant="body2"
                color="white"
              >
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
              maxWidth: {
                xs: "80%",
                sm: "70%",
                md: 345,
              },
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
                sx={{
                  fontSize: {
                    xs: "25px",
                    sm: "27px",
                    md: "29px",
                    lg: "31px",
                    xl: "33px",
                  },
                }}
              >
                User friendly
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "15px",
                    sm: "17px",
                    md: "19px",
                    lg: "21px",
                    xl: "23px",
                  },
                }}
                textAlign={"center"}
                variant="body2"
                color="white"
              >
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
          initial={{
            opacity: 0,
            visibility: "hidden",
            scale: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            visibility: "visible",
            scale: 1,
          }}
          component={motion.div}
          transition={{
            duration: 0.5,
          }}
          sx={{
            zIndex: "2",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card
            sx={{
              maxWidth: {
                xs: "80%",
                sm: "70%",
                md: 345,
              },
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
                sx={{
                  fontSize: {
                    xs: "25px",
                    sm: "27px",
                    md: "29px",
                    lg: "31px",
                    xl: "33px",
                  },
                }}
                component="div"
              >
                iOS & Android App
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "15px",
                    sm: "17px",
                    md: "19px",
                    lg: "21px",
                    xl: "23px",
                  },
                }}
                textAlign={"center"}
                variant="body2"
                color="white"
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maiores, unde!
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box
          component={motion.div}
          initial={{
            opacity: 0,
            visibility: "hidden",
            scale: 0,
          }}
          whileInView={{
            opacity: 1,
            visibility: "visible",
            scale: 1,
          }}
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
              maxWidth: {
                xs: "80%",
                sm: "70%",
                md: 345,
              },

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
                sx={{
                  fontSize: {
                    xs: "25px",
                    sm: "27px",
                    md: "29px",
                    lg: "31px",
                    xl: "33px",
                  },
                }}
                textAlign={"center"}
                color={"white"}
                gutterBottom
                variant="h5"
                component="div"
              >
                Fast Delivery
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "15px",
                    sm: "17px",
                    md: "19px",
                    lg: "21px",
                    xl: "23px",
                  },
                }}
                textAlign={"center"}
                variant="body2"
                color="white"
              >
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
              maxWidth: {
                xs: "80%",
                sm: "70%",
                md: 345,
              },
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
                sx={{
                  fontSize: {
                    xs: "25px",
                    sm: "27px",
                    md: "29px",
                    lg: "31px",
                    xl: "33px",
                  },
                }}
                textAlign={"center"}
                color={"white"}
                gutterBottom
                variant="h5"
                component="div"
              >
                Warranty for all
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "15px",
                    sm: "17px",
                    md: "19px",
                    lg: "21px",
                    xl: "23px",
                  },
                }}
                textAlign={"center"}
                variant="body2"
                color="white"
              >
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
      </Box>
      <Box
        sx={{
          marginTop: "40px",
          width: "100%",
          display: "flex",
          flexDirection: {
            xs: "column",
            lg: "row",
          },
          justifyContent: {
            xs: "center",
            lg: "space-between",
          },
          alignItems: "center",
          gap: "40px",
        }}
      >
        <Box
          sx={{
            width: "55%",
          }}
        >
          <Box
            initial={{
            
              opacity: 0,
              visibility: "hidden",
              scale: 0,
            }}
            whileInView={{
 
              opacity: 1,
              visibility: "visible",
              scale: 1,
            }}
            component={motion.img}
            sx={{
              maxWidth: {
                xs: 250,
                sm: 200,
                lg: 600,
              },
            }}
            transition={{
              duration: 1,
            }}
            src="assets/backGrrond.png"
            alt=""
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "25px",
                sm: "27px",
                md: "29px",
                lg: "31px",
                xl: "33px",
              },
            }}
            fontWeight={900}
            color={"secondary"}
            variant="h3"
          >
            Unified product catalog
          </Typography>

          <Typography color={"secondary"} fontSize={20} variant="body2">
            Manage, edit, and sync product information across all your sales
            channels—lightning fast.
          </Typography>
          <Stack spacing={2} direction={"row"}>
            <CheckBoxIcon color="success" fontSize="medium" />
            <Typography color="white" fontSize={18} variant="body2">
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
      </Box>
      <Box>
        <Typography my={10} textAlign={"center"} variant="h5" fontWeight={900}>
          Trusted by worldwide largest companies
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
          className="companies"
        >
          <motion.img
            initial={{
            
              visibility: "hidden",
              opacity: 0,
              scale: 0,
            }}
            whileInView={{
              scale: 1,
              opacity: 1,
              visibility: "visible",
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            width="100"
            loading="lazy"
            src="https://assets-global.website-files.com/65a145bf5d6be8380af14e40/65a145bf5d6be8380af14e93_4.png"
            alt=""
          />
          <motion.img
            initial={{
             
              visibility: "hidden",
              opacity: 0,
              scale: 0,
            }}
            whileInView={{
              scale: 1,
              opacity: 1,
              visibility: "visible",
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
            width="100"
            loading="lazy"
            alt=""
            src="https://assets-global.website-files.com/65a145bf5d6be8380af14e40/65a145bf5d6be8380af14e91_2.png"
          />
          <motion.img
            initial={{
         
              visibility: "hidden",
              opacity: 0,
              scale: 0,
            }}
            whileInView={{
              scale: 1,
              opacity: 1,
              visibility: "visible",
              x: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            width="100"
            loading="lazy"
            src="https://assets-global.website-files.com/65a145bf5d6be8380af14e40/65a145bf5d6be8380af14e94_2-1.png"
            alt=""
          />
          <motion.img
            initial={{
           
              visibility: "hidden",
              opacity: 0,
              scale: 0,
            }}
            whileInView={{
              scale: 1,
              opacity: 1,
              visibility: "visible",
              x: 0,
            }}
            transition={{
              duration: 1.4,
            }}
            width="100"
            loading="lazy"
            src="https://assets-global.website-files.com/65a145bf5d6be8380af14e40/65a145bf5d6be8380af14e92_3.png"
            alt=""
          />
          <motion.img
            initial={{
              
              visibility: "hidden",
              opacity: 0,
              scale: 0,
            }}
            whileInView={{
              scale: 1,
              opacity: 1,
              visibility: "visible",
              x: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            width="100"
            loading="lazy"
            src="https://assets-global.website-files.com/65a145bf5d6be8380af14e40/65a145bf5d6be8380af14e90_1.png"
            alt=""
          />
        </Box>
      </Box>
    </Box>
  );
}
