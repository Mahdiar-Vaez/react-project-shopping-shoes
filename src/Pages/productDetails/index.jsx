import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import Swipper from "../../Components/Swipper";
import { Box } from "@mui/material";
export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState();
  useEffect(() => {
    fetch(
      `https://asos2.p.rapidapi.com/products/v3/detail?id=${id}&lang=en-US&store=US&sizeSchema=US&currency=USD`,
      {
        headers: {
          "X-RapidAPI-Key":
          '0a53ca561bmshbc8be0d9402ac79p1797f2jsn43c1c602b353',
          "X-RapidAPI-Host": "asos2.p.rapidapi.com",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
      })
      .catch((err) => alert(err));
  }, [id]);
  return (
    <Box height={1000}>
      {product ? (
        <Swipper
          product={product}
          name={product?.name}
          id={product?.id}
          brandName={product?.brand?.name}
          price={product?.price?.current?.text}
          description={product?.brand?.description}
          img={product?.media?.images[0]?.url}
          imgII={product?.media?.images[1]?.url}
          imgIII={product?.media?.images[2]?.url}
        />
      ) : (
        <div style={{
          backgroundColor:'rgb(18,18,18)'
        }} className="loader-div">
          <MoonLoader color="rgba(36, 13, 244, 1)" />
        </div>
      )}
    </Box>
  );
}
