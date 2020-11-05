import React from "react";

import Header from "../Components/Navbar";
import Footer from "../Components/Footer";

import WhoWeAre from "../Components/WhoWeAre";
import StartupDescription from "../Components/StartupDescription";

function AboutUs() {
  return (
    <div>
      <Header />
      <WhoWeAre />
      <StartupDescription />
      <Footer />
    </div>
  );
}

export default AboutUs;
