import React, { useState } from "react";
import Grid from '@material-ui/core/Grid';
import shoppingmall from "../../../image/shopping_mall.jpg";

export default function LandingImg() {
    return (
        <div>
            <Grid container>
            <img src={shoppingmall} width="100%" height="100%" /> 
            </Grid>
        </div> 
    )};