import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ControlledOpenSelect from "./SelectFlag";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// import { Link } from 'react-router-dom'
// import { HOMEPAGE, LOGIN, PRIVATE, SIGN_UP } from '../routes'
// import { useContext } from 'react'
// // import { UserContext } from '../../../store/UserProvider'
// import { useSelector } from 'react-redux'
// import { selectLogedIn, selectUser } from '../store/user/userSelector'
import logo from "../../../assets/12-31.jpg";
import elf from "../../../assets/elf.png";
import elf2 from "../../../assets/51.png";
import { height } from "@mui/system";

// import elf from "../../../assets/1.png";
const useStyles = makeStyles((theme) => ({
  "@keyframes myEffect": {
    "0%": {
      transform: "translateX(-200%)",
      backgroundImage: `url(${elf})`,
      width: "50px",
      height: "50px",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      opacity: 0.4,
    },
    "30%": {
      transform: "translate(-100%, 100%)",
      backgroundImage: `url(${elf})`,
      width: "30px",
      height: "30px",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      opacity: 1,
    },
    "75%": {
      transform: "translateX(-210%)",
      opacity: 0.1,
      backgroundImage: `url(${elf})`,
      backgroundSize: "cover",
      width: "50px",
      height: "50px",
      backgroundRepeat: "no-repeat",
    },
    "100%": {
      backgroundImage: `url(${elf})`,
      width: "50px",
      height: "50px",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      transform: "translateX(-200%)",
      opacity: 0.4,
    },
  },
  anim: {
    animation: `$myEffect 3000ms infinite`,
  },
  animatedItem: {
    flexGrow: 1,
    // animation: `$myEffect 3000ms infinite`,
    display: "flex",
  },
  root: {
    flexGrow: 1,
    position: "fixed",
    width: "100%",
    zIndex: 999,
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    backgroundImage: "../logo/12-31.jpg",
  },
  bTn: {
    border: "2px solid white",
    borderRadius: "20px",
  },
  bTnN: {
    color: "Black",
    fontWeight: "bold",
    fontSize: "17px",
  },
  flexible: {
    display: "flex",
    flexWrap: "wrap",
  },
  ghost: {
    backgroundColor: "transparent",
    fontWeight: "bold",
    color: "black",
  },
  image: {
    maxWidth: "130px",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  // const userData = useContext(UserContext)
  // // const TOKEN = localStorage.getItem('token')
  // const isLogedIn = useSelector(selectLogedIn)
  // const user = useSelector(selectUser)
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.ghost}>
        <Toolbar className={classes.flexible}>
          <Typography variant="h6" className={classes.animatedItem}>
            <img src={logo} alt="surati" className={classes.image} />
            <Typography className={classes.anim} />
          </Typography>
          <Button color="inherit">
            <ShoppingCartIcon />
          </Button>
          <Button color="inherit">
            <ControlledOpenSelect />
          </Button>
          <Button>Home</Button>
          <Button color="inherit">Contact</Button>

          <React.Fragment>
            <Button color="inherit" className={classes.bTnN}>
              PROFILE
            </Button>
          </React.Fragment>
        </Toolbar>
      </AppBar>
    </div>
  );
}
