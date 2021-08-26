import React from "react";
import Banner from "./Banner";
import NavBar from "./NavBar";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  component: {
    padding: 10,
    background: "#F2F2F2",
  },
});
const Home = () => {
  const classes = useStyles();
  return (
    <>
      <NavBar />
      <Box className={classes.component}>
        <Banner />
      </Box>
    </>
  );
};

export default Home;
