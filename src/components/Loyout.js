import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Header from "./header/header";
import Footer from "./footer/footer";

import Bla from "./body/body";

const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
    margin: "0px",
  },
}));

export default function Loyout(props) {
  const classes = useStyles();
  return (
    <Grid container className={classes.grid}>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        {props.children}
      </Grid>
      <Grid item xs={12}>
        <Bla />
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
}
