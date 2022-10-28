import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import { Paper } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { products } from "../productsData/productData";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(6),
    paddingBottom: 0,
    margin: "auto",
    maxWidth: 3000,
  },
  image: {
    width: 408,
    height: 238,
    display: "flex",
    flexDirection: "column",
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  card_text: {
    backgroundColor: "grey",
  },
}));

export default function Details() {
  const { id } = useParams();
  const data = products
    .filter((element) => element.id === id)
    .map(({ price, name, description }) => {
      return (
        <>
          <div>{price}</div>
          <div>{name}</div>
          {description}
        </>
      );
    });
  console.log(data);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid
          container
          spacing={5}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <div className={classes.card_text}>
              <div className={classes.card_text}>
                {/* <h1>spring honey</h1>
                <h2>25 Gel</h2> */}
                {data}
              </div>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
