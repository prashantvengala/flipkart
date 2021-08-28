import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { dealData } from "../../Utils/data";
import {
  Box,
  Button,
  makeStyles,
  Typography,
  Divider,
} from "@material-ui/core";
import Countdown from "react-countdown";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const useStyles = makeStyles({
  component: {
    marginTop: 12,
    background: "#FFFFFF",
  },
  image: {
    height: 150,
  },
  deal: {
    display: "flex",
    padding: "15px 20px",
  },
  dealText: {
    fontSize: 22,
    fontWeight: 600,
    lineHeight: "32px",
    marginRight: 25,
  },
  timer: {
    color: "#7f7f7f",
    marginLeft: 10,
    display: "flex",
    alignItems: "center",
  },
  button: {
    marginLeft: "auto",
    backgroundColor: "#2874f0",
    borderRadius: 2,
    fontSize: 13,
  },
  text: {
    fontSize: 14,
    marginTop: 5,
  },
  wrapper: {
    padding: "25px 15px",
  },
});

const Slide = () => {
  const classes = useStyles();
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";

  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <span className={classes.timer}>
        {hours} : {minutes} : {seconds} Left
      </span>
    );
  };

  return (
    <>
      <Box className={classes.component}>
        <Box className={classes.deal}>
          <Typography className={classes.dealText}>Deals of the Day</Typography>
          <img src={timerURL} style={{ width: 24 }} alt="time clock" />
          <Countdown date={Date.now() + 5.04e7} renderer={renderer} />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            View All
          </Button>
        </Box>
        <Divider />
        <Carousel
          responsive={responsive}
          infinite={true}
          draggable={false}
          swipeable={false}
          centerMode={true}
          autoPlay={true}
          autoPlaySpeed={10000}
          keyBoardControl={true}
          showDots={false}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {dealData.map((product) => (
            <Box textAlign="center" className={classes.wrapper}>
              <img src={product.url} className={classes.image} />
              <Typography
                className={classes.text}
                style={{ fontWeight: 600, color: "#212121" }}
              >
                {product.title.shortTitle}
              </Typography>
              <Typography className={classes.text} style={{ color: "green" }}>
                {product.discount}
              </Typography>
              <Typography
                className={classes.text}
                style={{ color: "#212121", opacity: ".6" }}
              >
                {product.tagline}
              </Typography>
            </Box>
          ))}
        </Carousel>
      </Box>
    </>
  );
};

export default Slide;
