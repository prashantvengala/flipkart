import React from "react";
import Header from "../Components/Header/Header";
import Home from "../Components/Home/Home";
import { Switch, Route } from "react-router-dom";
import Cart from "../Components/Cart/Cart";
import TemplateProvider from "../Templates/TemplateProvider";
import ContextProvider from "../Context/ContextProvider";
const Routes = () => {
  return (
    <>
      <TemplateProvider>
        <ContextProvider>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
          </Switch>
        </ContextProvider>
      </TemplateProvider>
    </>
  );
};

export default Routes;
