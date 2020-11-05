import React from "react";
import { Grid, Tabs, Tab, Paper } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  color: {
    backgroundColor: "#E5F8EE",
  },
  h3: {
    fontWeight: "700",
    fontSize: "48px",
    color: "#5C5C5C",
  },
  container: {
    height: "740px",
  },
  header: {
    width: "600px",
    marginTop: "200px",
    textAlign: "center",
  },
  p: {
    fontSize: "25px",
  },
  description: {
    width: "900px",
    textAlign: "center",
    height: "200px",
  },
  [theme.breakpoints.down("xs")]: {
    h3: {
      fontWeight: "700",
      fontSize: "28px",
      color: "#5C5C5C",
    },
    container: {
      height: "140px",
      marginTop: "70px",
    },
    header: {
      width: "300px",
      marginTop: "60px",
      textAlign: "center",
    },
    description: {
      width: "300px",
      textAlign: "center",
      height: "130px",
    },
  },
}));
function StartupDescription() {
  const classes = useStyles();
  return (
    <div>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        className={classes.color}
      >
        <Grid item xs={12}>
          <div className={classes.header}>
            <h3 className={classes.h3}>A community for startups by startups</h3>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.description}>
            <p style={{ color: "#5C5C5C" }}>
              Startup Accra is the place for you to be. With a vast network of
              industry experts, mentors and investors, you’re on your way to
              building a business that scales. Startup Accra is the place for
              you to be.
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default StartupDescription;
