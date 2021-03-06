import React from "react";

import Header from "../Components/Navbar";
import Footer from "../Components/Footer";

import WhoWeAre from "../Components/WhoWeAre";
import StartupDescription from "../Components/StartupDescription";
import Hq from "../Components/Hq";

function AboutUs() {
  return (
    <div>
      <Header />
      <WhoWeAre />
      <StartupDescription />
      <Hq />
      <Footer />
    </div>
  );
}

export default AboutUs;
