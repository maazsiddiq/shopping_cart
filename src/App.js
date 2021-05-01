import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import Navbar from "./navbar/navbar";
import Home from "./container/home/home";
import Products from "./container/products/products";
import Details from "./container/products/details/details";
import Cart from "./container/Cart/Cart";
import { theme } from "./config/MuiTheme";
import { ThemeProvider } from "@material-ui/core/styles";


function App() {
  return (
    <div>
       <BrowserRouter>
     <ThemeProvider theme={theme}>
        <Navbar />
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/Products" component={Products}></Route>
        <Route exact path="/Details/:id" component={Details}></Route>
        <Route exact path="/Cart" component={Cart}></Route>
     </ThemeProvider>
     </BrowserRouter>
    </div>
  );
}

export default App;
