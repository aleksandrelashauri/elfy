import React from "react";
import { Grid, Box } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  bstflexible: {
    display: "flex",
    justifyContent: "space-around",
    background: "#1266F1",
    color: "white",
    alignItems: "center",
  },
  padd: {
    padding: "1.5rem",
    fontSize: "22px",
  },
}));

export default function Social() {
  const classes = useStyles();
  return (
    <Grid container className={classes.bstflexible}>
      <Box className={classes.padd}>
        Get connected with us on social networks!
      </Box>
      <Box className={classes.padd}>
        <FacebookIcon
          style={{ fontSize: "30px", paddingLeft: "15px", cursor: "pointer" }}
        />
        <TwitterIcon
          style={{ fontSize: "30px", paddingLeft: "15px", cursor: "pointer" }}
        />
        <YouTubeIcon
          style={{ fontSize: "30px", paddingLeft: "15px", cursor: "pointer" }}
        />
        <LinkedInIcon
          style={{ fontSize: "30px", paddingLeft: "15px", cursor: "pointer" }}
        />
        <InstagramIcon
          style={{ fontSize: "30px", paddingLeft: "15px", cursor: "pointer" }}
        />
      </Box>
    </Grid>
  );
}
