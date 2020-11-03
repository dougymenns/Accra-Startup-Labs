import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Grid, Tabs, Tab, Paper } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import { withRouter } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import "../App.css";
import Logo from "../images/logo.png";
import HomeImage from "../images/home1.png";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontFamily: "Montserrat",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1,
    },
  },
  headerOptions: {
    display: "flex",
    flex: 1,
    justifyContent: "space-around",
  },
  navCtaLogin: {
    width: "123px",
    height: "40px",
    background: "#3AB675",
  },
  MenuItem:{
      color: "#5c5c5c"
  }
}));

const Header = (props) => {
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  //using theme for mobile rendering
  const theme = useTheme();
  //media query init
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  console.log(isMobile);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar
        title={<img src={Logo} alt="Logo" height="60px" />}
        position="static" 
        style={{backgroundColor: "white"}}
      >
        <Toolbar color="black">
          <Typography variant="h6" className={classes.title}>
            <img src={Logo} alt="Logo" height="60px" />
          </Typography>
          {isMobile ? (
            <div>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="black"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                <MenuItem style={{color: "black !important"}} onClick={() => handleMenuClick("/about-us")}>
                  About Us
                </MenuItem>
                <MenuItem onClick={() => handleMenuClick("/our-community")}>
                  Our Community
                </MenuItem>
                <MenuItem onClick={() => handleMenuClick("/events")}>
                  Events
                </MenuItem>
                <MenuItem onClick={() => handleMenuClick("/startups")}>
                  Start Ups
                </MenuItem>
              </Menu>
            </div>
          ) : (
            <>
              <Grid justify={"center"} alignItems={"center"} container>
                <Grid item>
                  <Grid container justify={"center"}>
                    <Tabs aria-label="Navigation Tabs">
                      <Tab style={{color: "#5c5c5c",fontFamily: "Montserrat"}}
                        onClick={() => handleMenuClick("/about-us")}
                        label={"About Us"}
                      />
                      <Tab style={{color: "#5c5c5c",fontFamily: "Montserrat"}}
                        onClick={() => handleMenuClick("/our-community")}
                        label={"Our Community"}
                      />
                      <Tab style={{color: "#5c5c5c",fontFamily: "Montserrat"}}
                        onClick={() => handleMenuClick("/events")}
                        label={"Events"}
                      />
                      <Tab style={{color: "#5c5c5c",fontFamily: "Montserrat"}}
                        onClick={() => handleMenuClick("/start-ups")}
                        label={"Start Ups"}
                      />
                    </Tabs>
                  </Grid>
                </Grid>
              </Grid>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
              >
                <button className="nav-cta">Join Us</button>
              </IconButton>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
              >
                <button className="nav-cta-login " style={{ color: "#5C5C5C" }}>
                  Login
                </button>
              </IconButton>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(Header);
