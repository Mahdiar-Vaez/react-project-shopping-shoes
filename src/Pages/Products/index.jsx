import React, { useEffect,useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import './style.css'
import { MoonLoader } from "react-spinners";

export default function Products() {
  console.log()
  const [products, setProducts] = useState();
  useEffect(() => {
    fetch(
      "https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US",
      {
        headers: {
          "X-RapidAPI-Key": '0a53ca561bmshbc8be0d9402ac79p1797f2jsn43c1c602b353',
          "X-RapidAPI-Host": "asos2.p.rapidapi.com",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);
  const items = products?.map((e, index) => {
    return (
      <Link
        style={{
          textDecoration: "none",
        }}
        to={`/product-details/${e?.id}/${e?.name.split(" ").join("-")}`}
      >
      
        <Card
          sx={{
            maxWidth:{
              xs:150,md:300
            },
            height:{
              xs:305,
              sm:350,
              md:420

            },
            marginTop:{
              xs:10
            },
            background:
              "linear-gradient(72.3deg, rgb(29, 7, 64) 8.5%, rgb(253, 105, 139) 92.2%)",
            padding: "20px",
          }}
        >
          <CardActionArea>
            <CardMedia
              key={index}
              component="img"
              sx={{
                height:{
                  xs:155,sm:100,
                  md:200
                }
              }}
              image={"https://" + e?.imageUrl}
              alt={e?.brandName}
            />
            <CardContent>
              <Typography
                color={"white"}
                gutterBottom
                variant="h5"
                sx={{
                  fontSize:{
                    xs:12,
                    sm:15,
                    md:18,
                    lg:20,
                    xl:22
                  }
                }}
                component="div"
              >
                {e?.name}
              </Typography>
              <Typography color={"white"} variant="body2">
                {e?.description}
              </Typography>
              <span>{e?.price?.current?.text}</span>
              <br />
              <span>{e?.colour}</span>
            </CardContent>
          </CardActionArea>
        </Card>
       </Link>
    );
  });
  return (
    <Box
      sx={{
        marginTop: "10px",
        backgroundColor: "rgb(18,18,18)",
        padding: "20px 5%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "30px",
        width: "100%",
        height: "max-content",
      }}
    >
      {products ? <>{items}</> : <div className="loader-div"><MoonLoader  color='rgba(36, 13, 244, 1)' /></div>}
   
    </Box>
  );
}
// headers
// "X-RapidA?I-Key':
// 'X-RapidAPI-Host
// Exampie Responses
// O Copy Code
// 'e1f29039ecmshb084fd5638045eap10ba27jsn7ca73a1a0fBb',
// 'asos2.p.rapidapi.com'