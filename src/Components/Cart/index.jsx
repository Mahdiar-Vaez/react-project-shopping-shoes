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
import { Box, Button, TableFooter, Typography } from "@mui/material";
import { addItem, removeItem, removeAll } from "../../redux/Slice/Cartslice";
import './style.css'
import { Block } from "@mui/icons-material";
import { hover } from "@testing-library/user-event/dist/hover";
import { color } from "framer-motion";
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

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function Cart() {
  const dispatch = useDispatch();
  let totalPrice = 0;
  const products = useSelector((state) => state.cart.list);
  console.log(products);
  const items = products.map((e, index) => {
    {(totalPrice += e?.quantity * +e?.price?.current?.value)}
    return (
      <TableRow key={index}>
        
        <StyledTableCell width={100}  align="left">{e?.id}</StyledTableCell>
        <StyledTableCell width={400} sx={{
          textAlign:'center'
        }} align="left" >{e?.name}</StyledTableCell>
        <StyledTableCell width={100}  align="right">{e?.quantity}</StyledTableCell>
        <StyledTableCell width={100} align="right">{e?.price?.current?.text}</StyledTableCell>
        <StyledTableCell sx={{
          display:'flex',
          alignItems:'center',
          flexDirection:'column',
          justifyContent:'center',
          height:255
        }}  width={300} align="right">
          <Button sx={{
            marginRight:'0 5'
          }}
            onClick={() => dispatch(addItem(e))}
            variant="contained"
            color="success"
          >
            Add
          </Button>
          <Button sx={{
            margin:'0 5'
          }}
            onClick={() => dispatch(removeItem(e?.id))}
            variant="contained"
            color="error"
          >
            Remove
          </Button>
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
      margin:'0',
      padding:"5% 5%",
      backgroundColor:'rgb(18,18,18)'
    }}>
      {products.length>0?  <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700
       ,
        borderRadius:'30px'
        }} aria-label="cart table">
          <TableHead>
            <TableRow>
              <StyledTableCell   align="left">ID</StyledTableCell>
              <StyledTableCell width={400} align="left">NAME</StyledTableCell>
              <StyledTableCell width={100} align="left">COUNT</StyledTableCell>
              <StyledTableCell width={100}  align="left">PRICES</StyledTableCell>
              <StyledTableCell width={300} align="left">ADD OR REMOVE</StyledTableCell>
              <StyledTableCell width={400} align="left">PREVIEW</StyledTableCell>
              <StyledTableCell align="left">TOTAL PRICE</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {items}
          </TableBody>
          <TableFooter>
            <TableRow>
              <StyledTableCell width={300} align="center"><Typography  fontWeight={900}>total cost:  ${totalPrice}</Typography></StyledTableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer> : <Box height={600}  sx={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'

      }} ><Typography  className="my-animation"  variant="h2" color={'secondary'} textAlign={'center'} fontFamily={"fantasy"} >your cart is empty 
      
      
      </Typography>
      <Typography color={'white'} fontSize={'1.5em'} display={'block'} variant="body2"> 
      come on go and visit the <Link to={'/products'}><span className="link-to-products" 
      >products</span></Link>
      </Typography> </Box>}
     
    
    </Box>
  );
}
