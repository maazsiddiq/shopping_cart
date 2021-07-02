import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import shop1 from "../../../image/phone.jpg";
import shop2 from "../../../image/handfree.jpg";
import shop3 from "../../../image/watch.jpg";
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import * as actionCreators from '../../../store/actions/A-home';
import currencyFormatter from "currency-formatter";

const useStyles = makeStyles({
  root: {
     marginTop: "60px",
  },
  rootCard: {
    // marginTop: "60px",
  },
  media: {
    height: 160,
  },
  link: {
    textDecoration: "none"
  },
  discountPrice: {
    fontSize: "12px",
    color: "#A9A9A9"
  },
  actualPrice: {
    textDecoration: "line-through",
  },
});

const Product = (props) => {
  const classes = useStyles();
// console.log("Hi!! props", props.Shop.length);

  const a = [
    {_id: 1, 
     IMG: shop1,
     Title: "iphone", 
     Price: 12,
     Discount: 2,
     DiscountPrice: 12 - 2 / 100 * 12
    },
     {_id: 2,
     IMG: shop2,
     Title: "Handfree",
     Price: 10,
     Discount: 2,
     DiscountPrice: 10 - 2 / 100 * 10
    },
     {_id: 3,
     IMG: shop3,
     Title: "Luxury Watch", 
     Price: 15,
     Discount: 5,
     DiscountPrice: 15 - 5 / 100 * 15
    },
     {_id: 4,
      IMG: shop3,
      Title: "Luxury Watch", 
      Price: 15,
      Discount: 5,
      DiscountPrice: 15 - 5 / 100 * 15
    },
    {_id: 1, 
      IMG: shop1,
      Title: "iphone", 
      Price: 12,
      Discount: 2,
      DiscountPrice: 12 - 2 / 100 * 12
     },
      {_id: 2,
      IMG: shop2,
      Title: "Handfree",
      Price: 10,
      Discount: 2,
      DiscountPrice: 10 - 2 / 100 * 10
     },
      {_id: 3,
      IMG: shop3,
      Title: "Luxury Watch", 
      Price: 15,
      Discount: 3,
      DiscountPrice: 15 - 3 / 100 * 15
     },
      {_id: 4,
       IMG: shop3,
       Title: "Luxury Watch", 
       Price: 15,
       Discount: 5,
       DiscountPrice: 15 - 5 / 100 * 15
     },
  ]

 const b = a.map((c) => {
    return (
      <Grid item xs={12} sm={6} md={3}> 
     <Link className={classes.link} to={`/Details/${c._id}`}>
     <Card className={classes.rootCard}>
         <CardMedia
            className={classes.media}
            image={c.IMG}
            />
          <CardContent style={{paddingTop:"0"}}>
            <Typography color="textSecondary"  variant="h6" >
             {c.Title}
            </Typography>
           <Grid container justify="space-between">  
            <Typography inline variant="subtitle1" align="left">
            <span className={classes.actualPrice}>{currencyFormatter.format(c.Price, { code: 'USD' })}</span> 
            <span className={classes.discountPrice}> {c.Discount}%</span>
            </Typography>
            <Typography inline variant="subtitle1" align="right">
            {currencyFormatter.format(c.DiscountPrice, { code: 'USD' })}
            </Typography>
           </Grid>
          </CardContent>
      </Card>
     </Link>
     </Grid>
    );
  });

  return (
    <div className={classes.root}>
      <Grid container justify="space-evenly">
        <Grid container item xs={10} spacing={1}>
          {b}
        </Grid>
      </Grid>  
    </div>
  );
}

export default connect(null)(Product);