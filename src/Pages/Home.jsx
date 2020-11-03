import React from "react";
import ContentNav from "../Components/ContentNav";
import LandingImage from "../Components/LandingImage";
import Header from "../Components/Navbar";
import PageNav from "../Components/PageNav"
import HomeContent1 from "../Components/HomeContent1"

function Home() {
  return <div>
      <Header />
      <LandingImage />
      <ContentNav />
      <PageNav />
      <HomeContent1 />

  </div>;
}

export default Home;
