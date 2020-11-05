import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import societe from "../images/societe.png";
import briter from "../images/briter.png";
import gtl from "../images/gtl.png";
import lawyer from "../images/lawyers.png";
import useMediaQuery from "@material-ui/core/useMediaQuery";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();
  //using theme for mobile rendering
  const theme = useTheme();
  //media query init
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <div className={classes.root}>
    <div className="partners-container">
      <h1>We're trusted by</h1>
    </div>
      {isMobile ? (
        <Grid
          container
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Grid item xs={12}>
            <img src={societe} style={{maxWidth: "180px"}} className="partners" />
          </Grid>
          <Grid item xs={12}>
            <img src={briter} style={{width: "190px"}} />
          </Grid>
          <Grid item xs={12}>
            <img src={gtl} style={{height: "90px"}} />
          </Grid>
          <Grid item xs={12}>
            <img src={lawyer} style={{height: "50px"}} />
          </Grid>
        </Grid>
      ) : (
        <Grid container spacing={1}>
          <Grid item sm={3}>
            <img src={societe} className="partners" />
          </Grid>
          <Grid item sm={3}>
            <img src={briter} />
          </Grid>
          <Grid item sm={3}>
            <img src={gtl} />
          </Grid>
          <Grid item sm={3}>
            <img src={lawyer} />
          </Grid>
        </Grid>
      )}
    </div>
  );
}
