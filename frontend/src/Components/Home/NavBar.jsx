import React from "react";
import { navData } from "../../Utils/data";
import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  component: {
    display: "flex",
    margin: "55px 130px 0 130px",
    justifyContent: "space-between",
  },
  container: {
    textAlign: "center",
    padding: "12px 8px",
  },
  image: {
    width: 64,
  },
  text: {
    fontSize: 13,
    fontWeight: 600,
  },
});

const NavBar = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.component}>
        {navData.map((data) => (
          <Box className={classes.container}>
            <img src={data.url} className={classes.image} />
            <Typography className={classes.text}>{data.text}</Typography>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default NavBar;
