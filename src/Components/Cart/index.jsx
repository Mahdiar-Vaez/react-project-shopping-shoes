import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button,  TableFooter, Typography } from "@mui/material";
import { addItem, removeItem, removeAll } from "../../redux/Slice/Cartslice";
import './style.css'
import { Link } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));





export default function Cart() {
  const dispatch = useDispatch();
  let totalPrice = 0;
  const products = useSelector((state) => state.cart.list);
  console.log(products);
  const items = products.map((e, index) => {
    {(totalPrice += e?.quantity * +e?.price?.current?.value)}
    return (
      <TableRow key={index}>
        
         <StyledTableCell sx={{
          display:'flex',
          alignItems:'center',
          flexDirection:'column',
          justifyContent:'center',
          height:255
        }}  width={150} align="right">
          <Button sx={{
            marginRight:'0 5'
          }}
            onClick={() => dispatch(addItem(e))}
            variant="contained"
            color="success"
            size="small"
          >
            +
          </Button>
          <Button sx={{
            margin:'0 5'
          }}
            onClick={() => dispatch(removeItem(e?.id))}
            variant="contained"
            color="error"
            size="small"
          >
            -
          </Button>
        </StyledTableCell>
        <StyledTableCell width={200} sx={{
          textAlign:'center'
        }} align="left" >{e?.name}</StyledTableCell>
        <StyledTableCell width={100}  align="right">{e?.quantity}</StyledTableCell>
        <StyledTableCell width={100} align="right">{e?.price?.current?.text}</StyledTableCell>
        <StyledTableCell  align="right">
      {e?.id}
        </StyledTableCell>
        <StyledTableCell align="left">
          <img width={150} height={200} src={"https://" + e?.media?.images[0]?.url} alt={e?.name} />
        </StyledTableCell >
        <StyledTableCell align="left">
          ${e?.quantity * +e.price?.current?.value}
        </StyledTableCell>
      </TableRow>
    );
  });
  return (
      
    <Box sx={{
      height:'max-content',
      width:'100%',
      marginTop:{
        xs:18,
        md:0
      },
      padding:"5% 5%",
      backgroundColor:'rgb(18,18,18)'
    }}>
      {products.length>0?  <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300
       ,
        borderRadius:'30px'
        }} aria-label="cart table">
          <TableHead>
            <TableRow>
            <StyledTableCell  align="left">ADD OR REMOVE</StyledTableCell>
              <StyledTableCell  align="left">NAME</StyledTableCell>
              <StyledTableCell  align="left">COUNT</StyledTableCell>
              <StyledTableCell   align="left">PRICES</StyledTableCell>
              <StyledTableCell  align="left">ID</StyledTableCell>
              <StyledTableCell  align="left">PREVIEW</StyledTableCell>
              <StyledTableCell align="left">TOTAL PRICE</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {items}
          </TableBody>
          <TableFooter>
            <TableRow>
              <StyledTableCell align="center"><Typography  fontWeight={900}>total cost:  ${totalPrice}</Typography></StyledTableCell>
              <StyledTableCell align="center"><Button onClick={()=>dispatch(removeAll())}  fontWeight={900}>Remove all</Button></StyledTableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer> : <Box  sx={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',height:'80vh'

      }} ><Typography  sx={{
        fontSize:{
          xs:40,sm:42,md:46,lg:48,xl:50
        }
      }} className="my-animation"  variant="h2" color={'secondary'} textAlign={'center'} fontFamily={"fantasy"} >your cart is empty 
      
      
      </Typography>
      <Typography color={'white'} fontSize={'1.5em'} display={'block'} variant="body2"> 
      come on go and visit the <Link className="link" to={'/products'}><span className="link-to-products" 
      >products</span></Link>
      </Typography> </Box>}
     
    
    </Box>
  );
}
