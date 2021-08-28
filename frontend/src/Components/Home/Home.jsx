import React from "react";
import Banner from "./Banner";
import NavBar from "./NavBar";
import { Box, makeStyles } from "@material-ui/core";
import Slide from "./Slide";
import MidSection from "./MidSection";

const useStyles = makeStyles({
  component: {
    padding: 10,
    background: "#F2F2F2",
  },
  rightWrapper: {
    background: "#FFFFFF",
    padding: 5,
    margin: "12px 0 0 10px",
    width: "17%",
  },
});
const Home = () => {
  const classes = useStyles();

  const adURL =
    "https://rukmini.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";
  return (
    <>
      <NavBar />
      <Box className={classes.component}>
        <Banner />
        <Box style={{ display: "flex" }}>
          <Box style={{ width: "83%" }}>
            <Slide timer={true} title="Deals of the Day" />
          </Box>
          <Box className={classes.rightWrapper}>
            <img src={adURL} alt="add" style={{ width: 230, height: "auto" }} />
          </Box>
        </Box>
        <MidSection />
        <Slide timer={false} title="Discounts for you" />
        <Slide timer={false} title="Suggested Items" />
        <Slide timer={false} title="Top Selection" />
        <Slide timer={false} title="Recommended Items" />
        <Slide timer={false} title="Best sellers" />
      </Box>
    </>
  );
};

export default Home;
