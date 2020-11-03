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
import HomeContent1Picture from "../images/home3.png";

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
  paperContainer: {
    backgroundImage: `url(${"../images/home3.png"})`,
  },
}));
function HomeContent1() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <div>
      <Grid containter>
        <Grid item xs={12} lg={12}>
          <div className="home-content-1">
            <Grid container>
              <Grid
                direction="column"
                alignItems="center"
                justify="center"
                xs={6}
                lg={6}
              >
                <div className="home-content-1-left-container">
                  <h3 style={{ color: "#5C5C5C" }}>
                    Build your business while networking with smart people like
                    you.
                  </h3>
                  <div className="home3-second-element">
                    <p className="home3-p" style={{ color: "#5C5C5C" }}>
                      Startup Accra is a place for you to be. With a vast
                      network of industry experts, mentors and investors, you're
                      on your way to building a business that scales.
                    </p>
                  </div>
                </div>
              </Grid>
              <Grid xs={6} lg={6}>
                {isMobile ? (
                  <div className="home-content-1-right-container">
                    <div className="right-container-pics ight-container-pic">
                      <img src={HomeContent1Picture} />
                    </div>
                  </div>
                ) : (
                  <div className="home-content-1-right-container">
                    <div className="right-container-pic">
                      <img src={HomeContent1Picture} />
                    </div>
                  </div>
                )}
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default HomeContent1;
