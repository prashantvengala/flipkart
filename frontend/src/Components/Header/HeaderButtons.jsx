import React from "react";
import { makeStyles, Box, Typography, Badge, Button } from "@material-ui/core";
import { mergeClasses } from "@material-ui/styles";
import ShoppingCart from "@material-ui/icons/ShoppingCart";

const useStyles = makeStyles({
  login: {
    background: "#ffffff",
    color: "#2874f0",
    textTransform: "none",
    fontWeight: 600,
    borderRadius: 2,
    padding: "5px 40px",
    boxShadow: "none",
  },
  wrapper: {
    margin: "0 7% 0 auto",
    display: "flex",
    "& > *": {
      marginRight: 50,
      alignItems: "center",
    },
  },
  container: {
    display: "flex",
  },
});

const HeaderButtons = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.wrapper}>
        <Button variant="contained" className={classes.login}>
          Login
        </Button>
        <Typography style={{ marginTop: 5 }}>More</Typography>
        <Box className={classes.container}>
          <Badge badgeContent={2} color="secondary">
            <ShoppingCart />
          </Badge>
          <Typography style={{ marginLeft: 10 }}>Cart</Typography>
        </Box>
      </Box>
    </>
  );
};

export default HeaderButtons;
