import React from "react";
import { connect } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import currencyFormatter from "currency-formatter";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import * as actionCreators from "../../store/actions/A-home";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  Image: {
    width: "58px",
    height: "42px",
  },
  paperBox: {
    display: "flex",
    justifyContent: "center",
    "& > *": {
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
  },
  counters: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Cart = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Container>
        {props.Shop.length > 0 ? (
          <>
            <Typography variant="h6">Your Cart</Typography>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Picture</TableCell>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">Price</TableCell>
                    <TableCell align="center">Inc/Dec</TableCell>
                    <TableCell align="center">TotalPrice</TableCell>
                    <TableCell align="center">Remove</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {props.Shop.map((row) => (
                    <TableRow key={row._id}>
                      <TableCell align="center" component="th" scope="row">
                        <img src={row.IMG} className={classes.Image} />
                      </TableCell>
                      <TableCell align="center">{row.Title}</TableCell>
                      <TableCell align="center">
                        {currencyFormatter.format(row.DiscountPrice, {
                          code: "USD",
                        })}
                      </TableCell>
                      <TableCell>
                        <Box className={classes.paperBox}>
                          <Paper
                            className={classes.counters}
                            variant="outlined"
                            onClick={props.DEC}
                          >
                            <RemoveIcon fontSize="small" />
                          </Paper>
                          <Paper
                            className={classes.counters}
                            variant="outlined"
                          >
                            {row.Quantity}
                          </Paper>
                          <Paper
                            className={classes.counters}
                            variant="outlined"
                            onClick={props.INC}
                          >
                            <AddIcon fontSize="small" />
                          </Paper>
                        </Box>
                      </TableCell>
                      <TableCell align="center">
                        {currencyFormatter.format(
                          row.DiscountPrice * row.Quantity,
                          { code: "USD" }
                        )}
                      </TableCell>
                      <TableCell align="center">
                        <Tooltip title="Delete">
                          <IconButton color="secondary" aria-label="delete">
                            <DeleteOutlineIcon size="small" />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        ) : (
          <Typography variant="h6">your cart is empty!</Typography>
        )}
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    Shop: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    INC: (payload) => dispatch(actionCreators.Increment(payload)),
    DEC: (payload) => dispatch(actionCreators.Decrement(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
