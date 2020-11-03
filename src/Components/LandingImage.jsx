import React from "react";
import { Grid, Tabs, Tab, Paper } from "@material-ui/core";

function LandingImage() {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} lg={12}>
          <div className="home_1">
            <Grid container>
              <Grid item xs={8} sm={8}>
                <div className="home1-text-container">
                  <div className="image-text">
                    <div className="image-text-header">
                      <h4>
                        Looking to growing your business with the right
                        community?
                      </h4>
                    </div>
                  </div>
                  <div className="image-text">
                    <div className="image-text-header">
                      <p>
                        Startup Accra is the best place for you to be. With a
                        vast network of industry experts, mentors and investors,
                        you're on your way to bulding a business that scale.
                      </p>
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

export default LandingImage;
