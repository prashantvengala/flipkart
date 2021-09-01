import React, { useEffect } from "react";
import Banner from "./Banner";
import NavBar from "./NavBar";
import { Box, makeStyles } from "@material-ui/core";
import Slide from "./Slide";
import MidSection from "./MidSection";
import { useDispatch, useSelector } from "react-redux";
import { getProducts as listProducts } from "../../Redux/Actions/productAction";

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

  const { products } = useSelector((state) => state.getProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <Box className={classes.component}>
        <Banner />
        <Box style={{ display: "flex" }}>
          <Box style={{ width: "83%" }}>
            <Slide timer={true} title="Deals of the Day" products={products} />
          </Box>
          <Box className={classes.rightWrapper}>
            <img src={adURL} alt="add" style={{ width: 230, height: "auto" }} />
          </Box>
        </Box>
        <MidSection />
        <Slide products={products} timer={false} title="Discounts for you" />
        <Slide products={products} timer={false} title="Suggested Items" />
        <Slide products={products} timer={false} title="Top Selection" />
        <Slide products={products} timer={false} title="Recommended Items" />
        <Slide products={products} timer={false} title="Best sellers" />
      </Box>
    </>
  );
};

export default Home;
