import React from "react";
import { Grid, Tabs, Tab, Paper } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import aboutus1 from "../images/aboutus1.png";
import aboutus2 from "../images/aboutus2.png";
import aboutus3 from "../images/aboutus3.png";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    flexGrow: 1,
  },
  color: {
    backgroundColor: "#E5F8EE",
  },
  primaryHead: {
    color: "#5C5C5C",
    fontFamily: "Montserrat",
    fontWeight: "600",
  },
  primaryText: {
    color: "#5C5C5C",
    fontFamily: "Montserrat",
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
    marginTop: "100px",
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

  containerCenter: {
    alignItems: "center",
    paddingLeft: "190px",
    paddingTop: "90px",
    height: "500px",
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
    containerCenter: {
        height: "1250px",
        paddingLeft: "18px",
        alignItems: "center"
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
      <div className={classes.containerCenter}>
        <Grid container spacing={1}>
          <Grid item xs={12} lg={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="240"
                  image={aboutus1}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    className={classes.primaryHead}
                  >
                    A community for startups by startups
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.primaryText}
                  >
                    Startup Accra is the place for you to be. With a vast
                    network of industry experts.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="240"
                  image={aboutus2}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    className={classes.primaryHead}
                  >
                    A community for startups by startups
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.primaryText}
                  >
                    Startup Accra is the place for you to be. With a vast
                    network of industry experts.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} lg={4} width="345">
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="240"
                  image={aboutus3}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    className={classes.primaryHead}
                  >
                    A community for startups by startups
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.primaryText}
                  >
                    Startup Accra is the place for you to be. With a vast
                    network of industry experts.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default StartupDescription;
