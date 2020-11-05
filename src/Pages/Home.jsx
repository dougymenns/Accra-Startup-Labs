import React from "react";
import ContentNav from "../Components/Partners";
import LandingImage from "../Components/LandingImage";
import Header from "../Components/Navbar";
import PageNav from "../Components/PageNav";
import HomeContent1 from "../Components/HomeContent1";
import Footer from "../Components/Footer";
import KnowUs from "../Components/KnowUs";
import Partners from "../Components/Partners";

function Home() {
  return (
    <div>
      <Header />
      <LandingImage />
      <PageNav />
      <HomeContent1 />
      <KnowUs />
      <Partners />
      <PageNav />
      <Footer />
    </div>
  );
}

export default Home;
