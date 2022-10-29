import React from "react";
import { Grid, Box } from "@material-ui/core";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import { makeStyles } from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import MapIcon from "@material-ui/icons/Map";

const useStyles = makeStyles((theme) => ({
  bstflexible1: {
    display: "flex",
    background: "#2E2E2E",
    padding: "34px",
    color: "#F8FFFF",
  },
  bstflexible: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  padd: {
    display: "flex",
    flexDirection: "column",
  },
  under: {
    borderBottom: "1px solid #105CD8",
    paddingBottom: "10px",
    cursor: "pointer",
  },
}));

export default function Informations() {
  const classes = useStyles();
  return (
    <Grid container className={classes.bstflexible1}>
      <Grid container className={classes.bstflexible}>
        <Box  className={classes.padd}>
          <h3 className={classes.under}>About me</h3>
          <p>Here you can use rows and columns to</p>
          <p>organize your footer content. Lorem </p>
          <p>ipsum dolor sit amet, consectetur </p>
          <p>adipisicing elit.</p>
        </Box>
        <Box  className={classes.padd}>
          <h3 className={classes.under}>Products</h3>
          <p>Alpine honey</p>
          <p>Spring honey</p>
          <p>linden honey</p>
          <p></p>
        </Box>
        <Box  className={classes.padd}>
          <h3 className={classes.under}>Useful links</h3>
          <p>Your Account</p>
          <p>Become an Affiliate</p>
          <p>Shipping Rates</p>
          <p></p>
        </Box>
        <Box  className={classes.padd}>
          <h3 className={classes.under}>Contacts</h3>
          <p>
            <MapIcon style={{ fontSize: "20px", paddingRight: "10px" }} />
            Tbilisi, Georgia
          </p>
          <p>
            <PhoneAndroidIcon
              style={{ fontSize: "20px", paddingRight: "10px" }}
            />
            598 16 99 11
          </p>
          <p>
            <MailIcon style={{ fontSize: "20px", paddingRight: "10px" }} />
            elfyshoney@gmail.com
          </p>
          <p>
            <WatchLaterIcon
              style={{ fontSize: "20px", paddingRight: "10px" }}
            />
            Monday - Friday: 10-19
          </p>
        </Box>
      </Grid>
    </Grid>
  );
}
