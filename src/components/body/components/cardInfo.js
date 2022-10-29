import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import { Paper, Typography } from "@material-ui/core";
import { Link, NavLink } from "react-router-dom";
import { products } from "../../../productsData/productData";

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
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default function CardInfo() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
          {products.map(({ id, name, price, img }) => {
            return (
              <Grid item xs={12} sm={12} md={6} lg={4} key={id}>
                <div className={classes.card_text}>
                  <NavLink
                    to={id}
                    style={{ color: "black", textDecoretaion: "none" }}
                  >
                    <ButtonBase className={classes.image}>
                      <img className={classes.img} alt="complex" src={img} />
                    </ButtonBase>
                    <div className={classes.card_text}>
                      <Typography>{name}</Typography>
                      <Typography>{price} Gel</Typography>
                    </div>
                  </NavLink>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </Paper>
    </div>
  );
}
