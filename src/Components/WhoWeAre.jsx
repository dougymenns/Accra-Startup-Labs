import React from "react";
import { Grid, Tabs, Tab, Paper } from "@material-ui/core";


function WhoWeAre() {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} lg={12}>
          <div className="about-us-pic">
            <Grid container>
              <Grid item xs={8} sm={8}>
                <div className="home1-text-container">
                  <div className="image-text">
                    <div className="about-us-text-header">
                      <h3>
                        Who We Are
                      </h3>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={6} sm={6}></Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default WhoWeAre;
