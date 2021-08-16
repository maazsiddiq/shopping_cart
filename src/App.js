import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Navbar from "./navbar/navbar";
import Home from "./container/home/home";
import Products from "./container/products/products";
import Signin from "./container/signIn/signIn";
import Signup from "./container/signUp/signUp";
import Details from "./container/products/details/details";
import Cart from "./container/Cart/Cart";
import Footer from "./container/footer/footer";

import { Route, BrowserRouter } from "react-router-dom";
import { theme } from "./config/MuiTheme";
import { ThemeProvider } from "@material-ui/core/styles";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Navbar />
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/Products" component={Products}></Route>
          <Route exact path="/Details/:id" component={Details}></Route>
          <Route exact path="/Cart" component={Cart}></Route>
          <Route exact path="/SignIn" component={Signin}></Route>
          <Route exact path="/SignUp" component={Signup}></Route>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
