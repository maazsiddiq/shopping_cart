import React from 'react';
import {connect} from 'react-redux';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';
import shop1 from "../../image/phone.jpg";
import shop2 from "../../image/handfree.jpg";
import shop3 from "../../image/watch.jpg";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

// const rows =[
//   {_id: 1, 
//     IMG: shop1,
//     Title: "iphone", 
//     Description: "men watch good with over6,000 species, ranging across all continents except Antarctica",
//     Price: 12,
//     Discount: 2,
//     DiscountPrice: 12 - 2 / 100 * 12
//    },
//     {_id: 2,
//     IMG: shop2,
//     Title: "Handfree",
//     Description: "men watch good with over6,000 species, ranging across all continents except Antarctica",
//     Price: 10,
//     Discount: 2,
//     DiscountPrice: 10 - 2 / 100 * 10
//    },
//     {_id: 3,
//     IMG: shop3,
//     Title: "Luxury Watch",
//     Description: "men watch good with over6,000 species, ranging across all continents except Antarctica", 
//     Price: 15,
//     Discount: 5,
//     DiscountPrice: 15 - 5 / 100 * 15
//    },
//     {_id: 4,
//      IMG: shop3,
//      Title: "Luxury Watch", 
//      Description: "men watch good with over6,000 species, ranging across all continents except Antarctica",
//      Price: 15,
//      Discount: 5,
//      DiscountPrice: 15 - 5 / 100 * 15
//    },
// ]

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const Cart = (props) => {
  const classes = useStyles();
console.log(props.Shop," console statee");
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Picture</StyledTableCell>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="center">Price</StyledTableCell>
            <StyledTableCell align="center">Inc/Dec</StyledTableCell>
            <StyledTableCell align="center">TotalPrice</StyledTableCell>
            <StyledTableCell align="center">Remove</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.Shop.map((row) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell component="th" scope="row">
               <img src={row.IMG} width="60px" height="55px"></img>
              </StyledTableCell>
              <StyledTableCell align="left">{row.Title}</StyledTableCell>
              <StyledTableCell align="center">{row.Price}</StyledTableCell>
              <StyledTableCell align="center">haha</StyledTableCell>
              <StyledTableCell align="center">hoh</StyledTableCell>
              <StyledTableCell align="center">
               <Tooltip title="Delete">
                <IconButton aria-label="delete">
                <DeleteIcon />
                </IconButton>
              </Tooltip>
             </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


const mapStateToProps = state => {
    return {
      Shop: state.products
    };
  };

  export default connect(mapStateToProps)(Cart);