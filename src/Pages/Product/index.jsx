import React, { useEffect, useState } from "react";
import Card from "../../Components/Card";
import {  TailSpin } from "react-loader-spinner";

export default function Product() {
  const [products, setProducts] = useState();
  useEffect(() => {
    
    (async () => {
      try {  const res = await fetch(
        'https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US',
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "8de00fcc82msh1a5fc2bed05e452p1a5212jsnb2271d0a1bed",
            "X-RapidAPI-Host": "asos2.p.rapidapi.com",
          },
        }
      );
      const data=await res.json();
      setProducts(data.products)
      console.log(data)
      } catch (error) {
        alert(error)
      }
    
    }
    )();
  }, []);
  const items=products?.map((e,index)=>{

   return <Card  key={index} name={e?.name} brandName={e?.brandName}
    img={e?.imageUrl} id={e?.id} colour={e?.colour}
    price={e?.price.current.text}
    />
  })
  return <div className="d-flex py-5 justify-content-center gap-5 flex-wrap ">
    {products?<>{items}</>: <TailSpin width={500} height={500}/>
    }
  
    

  </div>;
}
