import React from "react";
import {
  Grid,
  Tabs,
  Tab,
  Paper,
  makeStyles,
  Typography,
  TextField,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import homeicon from "../images/home2icon.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  fontResize: {
    fontSize: "20px",
  },
  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: "white !important",
    },
  },
}));
function PageNav() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <>
      {isMobile ? (
        <div className="page-nav">
          <Grid container>
            <img src={homeicon} className="page-nav-background2" />
            <Grid item xs={0} sm={1} md={1} lg={1}>
              <img src={homeicon} className="page-nav-background" />
            </Grid>
            <Grid item xs={12} sm={2} md={2} lg={2}>
              <div className="page-nav-content">
                <center>
                  <p>
                    Ready to make your journey with us? Suscribe to our
                    newsletter today.
                  </p>
                </center>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Grid container spacing={1} justify="center">
                <Grid item xs={3}>
                  <TextField
                    id="standard-password-input"
                    label="First Name"
                    type="text"
                    autoComplete="current-password"
                    label={
                      <Typography
                        style={{ color: "white", fontFamily: "Montserrat" }}
                        variant="body2"
                        component="h5"
                      >
                        First Name
                      </Typography>
                    }
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    id="standard-password-input"
                    label="Last Name"
                    type="text"
                    autoComplete="current-password"
                    label={
                      <Typography
                        style={{ color: "white", fontFamily: "Montserrat" }}
                        variant="body2"
                        component="h5"
                      >
                        Last Name
                      </Typography>
                    }
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    id="standard-password-input"
                    label="Email"
                    type="email"
                    style={{ BorderColor: "white" }}
                    label={
                      <Typography
                        style={{ color: "white", fontFamily: "Montserrat" }}
                        variant="body2"
                        component="h5"
                      >
                        Email
                      </Typography>
                    }
                    InputProps={{
                      className: classes.multilineColor,
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid
              style={{ marginTop: "10px" }}
              container
              direction="column"
              alignItems="center"
              justify="center"
            >
              <Grid
                direction="column"
                alignItems="center"
                justify="center"
                item
                xs={12}
                sm={0}
                md={0}
                lg={0}
              >
                <button
                  className="nav-cta"
                  style={{ backgroundColor: "#2B985F" }}
                >
                  Join Us
                </button>
              </Grid>
            </Grid>
          </Grid>
        </div>
      ) : (
        <div className="page-nav">
          <Grid container>
            <img src={homeicon} className="page-nav-background2" />
            <Grid item xs={0} sm={1} md={1} lg={1}>
              <img src={homeicon} className="page-nav-background" />
            </Grid>
            <Grid item xs={12} sm={2} md={2} lg={2}>
              <div className="page-nav-content">
                <center>
                  <p style={{color: "white"}}>
                    Ready to make your journey with us? Suscribe to our
                    newsletter today.
                  </p>
                </center>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Grid container style={{ marginTop: "35px" }} spacing={1} justify="center">
                <Grid item xs={3}>
                  <TextField
                    id="standard-password-input"
                    label="First Name"
                    type="text"
                    autoComplete="current-password"
                    label={
                      <Typography
                        style={{ color: "white", fontFamily: "Montserrat" }}
                        variant="headline"
                        component="h3"
                      >
                        First Name
                      </Typography>
                    }
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    id="standard-password-input"
                    label="Last Name"
                    type="text"
                    autoComplete="current-password"
                    label={
                      <Typography
                        style={{ color: "white", fontFamily: "Montserrat" }}
                        variant="headline"
                        component="h3"
                      >
                        Last Name
                      </Typography>
                    }
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    id="standard-password-input"
                    label="Email"
                    type="email"
                    style={{ BorderColor: "white" }}
                    label={
                      <Typography
                        style={{ color: "white", fontFamily: "Montserrat" }}
                        variant="headline"
                        component="h3"
                      >
                        Email
                      </Typography>
                    }
                    InputProps={{
                      className: classes.multilineColor,
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid style={{ marginTop: "50px" }} item lg={1}>
              <button
                className="nav-cta"
                style={{ backgroundColor: "#2B985F", width: "170px" }}
              >
                Join Us
              </button>
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );
}

export default PageNav;
