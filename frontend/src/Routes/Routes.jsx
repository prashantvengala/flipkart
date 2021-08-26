import React from "react";
import Header from "../Components/Header/Header";
import Home from "../Components/Home/Home";
import { Switch, Route } from "react-router-dom";
import Cart from "../Components/Cart/Cart";
const Routes = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
