import React from "react";
import {
  Grid,
  makeStyles,
  useMediaQuery,
  useTheme,
  Paper,
} from "@material-ui/core";
import ContactCard from "./ContactCard";
import back from "../images/home4background.png";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "80%",
    margin: "auto",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  backimg: {
    backgroundImage: `url(${back})`,
    // opacity:"0.1"
  },
  map: {
    width: "715px",
    height: "520px",
    border: "0",
  },
  left: {
    marginTop: "100px",
  },
  paperContainer: {
    // height: "444px",
    marginBottom: "50px",
  },
  [theme.breakpoints.down("xs")]: {
    map: {
      width: "100%",
      height: "520px",
      border: "0",
    },
    container: {
      width: "100%",
      widthTop: "10px",
    },
    paperContainer: {
      height: "444px",
      marginBottom: "50px",
    },
    backimg: {
      backgroundImage: `url(${back})`,
    },
  },
}));
function MiniEvents() {
  const classes = useStyles();
  return (
    <div style={{ backgroundColor: "#e5f8ee" }} className={classes.backimg}>
      <div className={classes.container}>
        <Grid container xs={12} spacing={2}>
        <div style={{height:"300px"}}>
           <Grid item xs={12} lg={4}>
            <Paper className={classes.paperContainer}>
              <ContactCard />
            </Paper>
          </Grid> 
        </div>
          
          <Grid item xs={12} lg={4}>
            <Paper className={classes.paperContainer}>
              <ContactCard />
            </Paper>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Paper className={classes.paperContainer}>
              <ContactCard />
            </Paper>
          </Grid>
        </Grid>
      </div>
      <div className={classes.container}>
        <Grid container xs={12} spacing={2}>
          <Grid item xs={12} lg={4}>
            <Paper className={classes.paperContainer}>
              <ContactCard />
            </Paper>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Paper className={classes.paperContainer}>
              <ContactCard />
            </Paper>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Paper className={classes.paperContainer}>
              <ContactCard />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default MiniEvents;
