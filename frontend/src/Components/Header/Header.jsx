import React from "react";

import {
  AppBar,
  Toolbar,
  makeStyles,
  Box,
  Typography,
  withStyles,
  IconButton,
  Drawer,
  List,
  ListItem,
} from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  header: {
    background: "#2874f0",
    height: 55,
  },
}));

const Header = () => {
  const classes = useStyle();
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";
  return (
    <>
      <AppBar position="fixed" className={classes.header}>
        <Toolbar>
          <img src={logoURL} />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
