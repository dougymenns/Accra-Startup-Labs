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
import { withRouter } from "react-router-dom";
import ContentNav from "./Partners";
import logo from "../images/logo.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
function Footer(props) {
  const { history } = props;
  //using theme for mobile rendering
  const theme = useTheme();
  //media query init
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
  };

  return (
    <div>
      <Grid container>
        <Grid item xs={12} lg={12}>
          <Grid container>
            <Grid item xs={4} lg={4}>
              {isMobile ? (
                <div>
                  <Grid>
                    <img
                      src={logo}
                      style={{ width: "142px", height: "107px" }}
                    />
                  </Grid>
                  <div style={{ marginLeft: "10px" }}>
                    <a href="https://web.facebook.com/accrastartup/?_rdc=1&_rdr">
                      <FacebookIcon
                        style={{ color: "#6C6C6C", cursor: "pointer" }}
                      />
                    </a>
                    <a href="https://twitter.com/accra_startup?lang=en">
                      <TwitterIcon
                        style={{ color: "#6C6C6C", cursor: "pointer" }}
                      />
                    </a>
                    <a href="https://www.instagram.com/startupaccra/?hl=en">
                      <InstagramIcon
                        style={{ color: "#6C6C6C", cursor: "pointer" }}
                      />
                    </a>
                  </div>
                </div>
              ) : (
                <>
                  <center>
                    <Grid>
                      <img src={logo} />
                    </Grid>
                  </center>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "30px",
                      width: "200px",
                      marginLeft: "90px",
                    }}
                  >
                    <a href="https://web.facebook.com/accrastartup/?_rdc=1&_rdr">
                      <FacebookIcon
                        style={{ color: "#6C6C6C", cursor: "pointer" }}
                      />
                    </a>
                    <a href="https://twitter.com/accra_startup?lang=en">
                      <TwitterIcon
                        style={{ color: "#6C6C6C", cursor: "pointer" }}
                      />
                    </a>
                    <a href="https://www.instagram.com/startupaccra/?hl=en">
                      <InstagramIcon
                        style={{ color: "#6C6C6C", cursor: "pointer" }}
                      />
                    </a>
                  </div>
                </>
              )}
            </Grid>
            <Grid item xs={3} lg={3}>
              <h4>Quick Links</h4>
              <ul>
                <li onClick={() => handleMenuClick("/join-us")}>Join Us</li>
                <li onClick={() => handleMenuClick("/news")}>News</li>
                <li onClick={() => handleMenuClick("/start-ups")}>Startups</li>
                <li onClick={() => handleMenuClick("/partners")}>Partners</li>
                <li onClick={() => handleMenuClick("/events")}>Events</li>
              </ul>
            </Grid>
            <Grid item xs={4} lg={5}>
              <h4>Contact</h4>
              <ul>
                <li>1st floor HQ</li>
                <li>World Trade Center</li>
                <li>Accra, Ghana</li>
                <div className="footer-email">
                  <li>startupaccra18@gmail.com</li>
                </div>
                <li>+233554349393 /+233209335761</li>
              </ul>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default withRouter(Footer);
