import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import { imageURL } from "../../Utils/data";

const useStyle = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    marginTop: 20,
    justifyContent: "space-between",
  },
  image: {
    width: "100%",
  },
}));

const MidSection = () => {
  const classes = useStyle();
  return (
    <>
      <Box className={classes.wrapper}>
        {imageURL.map((image) => (
          <img src={image} style={{ width: "33%" }} />
        ))}
      </Box>
    </>
  );
};

export default MidSection;
