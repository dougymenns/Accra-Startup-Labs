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
    marginTop: "130px",
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
function Contact() {
  const classes = useStyles();
  return (
    <div style={{ backgroundColor: "#e5f8ee" }} className={classes.backimg}>
      <div className={classes.container}>
        <Grid container xs={12}>
          <Grid item xs={12} lg={6} className={classes.left}>
            <Paper>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.0740782040903!2d-0.20272508479399415!3d5.55603773519299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf909be3522d8d%3A0x83ecc364da8102c4!2sWorld%20Trade%20Center%2C%20Accra!5e0!3m2!1sen!2sgh!4v1604657909684!5m2!1sen!2sgh"
                className={classes.map}
                frameborder="0"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </Paper>
          </Grid>
          {/* <div className={classes.paperContainer}> */}
          <Grid item xs={12} lg={6}>
            <Paper className={classes.paperContainer}>
              <ContactCard />
            </Paper>
          </Grid>
          {/* </div> */}
        </Grid>
      </div>
    </div>
  );
}

export default Contact;
