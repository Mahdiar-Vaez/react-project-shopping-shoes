import { Box, TextField, Typography, Button } from "@mui/material";
import { color, motion } from "framer-motion";
import React, { useContext, useRef, useState } from "react";
import useFormFields from "../../../utils/useFormFields";
import AuthContext from "../../../utils/AuthContext";
import Toast from "../../../Components/Toast/Toast";
import { toast } from "react-toastify";

export default function Login({ handlePageType }) {
 
  const [toast,setToast]=useState()
  const [fields, handleChange] = useFormFields('successfully');
  const { token, handleToken } = useContext(AuthContext);

  const handleClick = () => {
    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      body: JSON.stringify(fields),
      headers:{
        'Content-type':"application/json"
      }
    })
      .then((res) => res.json())
      .then((data) => {handleToken(data.token)
        setToast(true)
       alert('you log in successfully')
  
      })
      .catch((err) =>{ alert(err)
     alert('username or pass is incorrect')
      });
  };
  return (
<>
 

 <motion.div
      initial={{
        x: -400,

        opacity: 0,
      }}
      animate={{
        x: 0,

        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        ease: "easeIn",
      }}
      style={{
        background:
          "linear-gradient(72.3deg, rgb(29, 7, 64) 8.5%, rgb(253, 105, 139) 92.2%)",
        width: "100%",
        height: "1000px",
        padding: "20px 5%",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "center",
        justifyContent: "space-evenly",

        textAlign: "center",
      }}
    >
     
      <Box
        sx={{
          borderRadius: "50px",
          backgroundColor: "rgba(18,18,18,.7)",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center",

          justifyContent: "space-around",
          width: "900px",
          textAlign: "center",
        }}
        height={500}
      >
        <Typography variant="h3" color={"secondary"}>
          pls Login{" "}
        </Typography>
        <TextField
          onChange={handleChange}
          name="username"
          sx={{
            color: "white",
          }}
          size="medium"
          label="enter your userName"
          variant="outlined"
          color="success"
        />
        <TextField
          onChange={handleChange}
          name="password"
          size="medium"
          variant="filled"
          color="success"
          label="enter your password"
        />
        <Button onClick={handleClick} variant="contained" color="secondary">
          Submit
        </Button>
        <h3
          style={{
            color: "white",
            cursor: "pointer",
          }}
          onClick={handlePageType}
        >
          don't you have account
        </h3>
      </Box>
      
    </motion.div></>
  
  );
}
