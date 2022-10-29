import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import { Paper, Typography, Box } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { products } from "../productsData/productData";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(9),
    paddingBottom: 0,
    margin: "auto",
    maxWidth: 3000,
    overflow: "scroll",
  },
  image: {
    // width: 408,
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
    maxWidth: "100%",
  },
}));

export default function Details() {
  const classes = useStyles();
  const { id } = useParams();
  const data = products
    .filter((element) => element.id === id)
    .map(({ price, name, description, img }) => {
      return (
        <>
          <img src={img} alt="imag" className={classes.card_text} />
          <Typography>{price}</Typography>
          <Typography>{name}</Typography>
          {description}
        </>
      );
    });
  return (
    <Paper className={classes.paper}>
      <Grid
        container
        direction="row"
        // justifyContent="center"
        alignItems="center"
      >
        <Grid>
          <Box>{data}</Box>
          <Typography>call us 551 03 22 55</Typography>
        </Grid>
      </Grid>
    </Paper>
    // </div>
  );
}
