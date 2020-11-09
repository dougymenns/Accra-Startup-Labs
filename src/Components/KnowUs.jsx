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
import home4background from "../images/home4background.png";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Link } from "react-router-dom";


function KnowUs() {
  //using theme for mobile rendering
  const theme = useTheme();
  //media query init
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <div>
      <Grid container>
        <Grid item xs={12} style={{ background: "#e5f8ee" }}>
          {isMobile ? (
            <>
              <div className="know-us-container">
                <img src={home4background} className="know-us-background" />
                <div className="know-us-left"></div>
                <div className="know-us-right">
                  <div className="know-us-first-element">
                    <h3>Get to know us.</h3>
                  </div>
                  <div className="know-us-second-element">
                    <p className="know-us-p" style={{ color: "#5C5C5C" }}>
                      Startup Accra is the place for you to be. With a vast
                      network of industry experts, mentors and investors, you’re
                      on your way to building a business that scales.
                    </p>
                  </div>
                  <Link to="/contact" style={{ textDecoration: "none" }}>
                    <div className="know-us-third-element">
                      <p style={{ color: "green", fontSize: "13px" }}>
                        Learn More{" "}
                        <ArrowForwardIcon
                          style={{ fontSize: "13px", paddingTop: "5px" }}
                        />
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
              <Grid container>
                <Grid
                  item
                  xs={12}
                  direction="column"
                  alignItems="center"
                  justify="center"
                >
                  <div className="connect">
                    <h1>Come . Connect . Build</h1>
                  </div>
                </Grid>
              </Grid>
            </>
          ) : (
            <>
              <div className="lg-know-us-container">
                <img src={home4background} className="lg-know-us-background" />
                <div className="lg-know-us-left"></div>
                <div className="lg-know-us-right">
                  <div className="lg-know-us-first-element">
                    <h3>Get to know us.</h3>
                  </div>
                  <div className="lg-know-us-second-element">
                    <p className="lg-know-us-p" style={{ color: "#5C5C5C" }}>
                      Startup Accra is the place for you to be. With a vast
                      network of industry experts, mentors and investors, you’re
                      on your way to building a business that scales.
                    </p>
                  </div>                  <Link to="/contact" style={{ textDecoration: "none" }}>

                  <div className="know-us-third-element">
                    <p
                      style={{
                        color: "green",
                        cursor: "pointer",
                        fontSize: "23px",
                      }}
                    >
                      Learn More
                      <ArrowForwardIcon
                        style={{ fontSize: "18px", paddingTop: "5px" }}
                      />
                    </p>
                  </div></Link>
                </div>
              </div>
              <Grid container>
                <Grid
                  item
                  xs={12}
                  direction="column"
                  alignItems="center"
                  justify="center"
                >
                  <div className="connect">
                    <h1>Come . Connect . Build</h1>
                  </div>
                </Grid>
              </Grid>
            </>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default KnowUs;
