import React from "react";
import { Grid, Tabs, Tab, Paper, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import arrow from "../images/arrow.png";

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    marginTop: "200px",
    textAlign: "center",
    width: "500px",
    fontSize: "30px",
    color: "white",
    fontFamily:"Montserrat"
  },
  directions: {
    width: "300px",
    height: "50px",
    textAlign: "center",
    justifyContent: "center",
    border: "1px solid white",
    display: "flex",
    alignItems: "center",
    color: "white",
  },
  [theme.breakpoints.down("xs")]: {
    headerContainer: {
      marginTop: "50px",
      textAlign: "center",
      width: "200px",
      fontSize: "13px",
      color: "white",
      fontFamily:"Montserrat"

    },
    directions: {
      width: "150px",
      height: "30px",
      textAlign: "center",
      justifyContent: "center",
      border: "1px solid white",
      display: "flex",
      alignItems: "center",
      color: "white",
    },
    h3: {
      fontSize: "10px",
    },
    img: {
      height: "10px",
    },
  },
}));

const Hq = (props) => {
  const { history } = props;

  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
  };
  return (
    <div>
      <Grid container>
        <Grid item xs={12} lg={12}>
          <div className="hq">
            <Grid
              container
              direction="column"
              alignItems="center"
              // justify="center"
            >
              <Grid item xs={6} lg={6}>
                <div className={classes.headerContainer}>
                  <h3>A collaborative working space in the heart of Accra</h3>
                </div>
              </Grid>
              <Grid item xs={6} sm={6}>
                <Link to="/contact" style={{textDecoration: "none"}}>
                  <div className={classes.directions}>
                    <h3 className={classes.h3}>Contact Us</h3>
                    <img
                      src={arrow}
                      className={classes.img}
                      style={{ paddingLeft: "6px", paddingTop: "2px" }}
                      onClick={() => handleMenuClick("/")}
                    />
                  </div>
                </Link>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Hq;
