import React, { useEffect } from "react";
import Hq from "../Components/Hq";
import LandingImage from "../Components/LandingImage";
import Header from "../Components/Navbar";
import PageNav from "../Components/PageNav";
import HomeContent1 from "../Components/HomeContent1";
import Footer from "../Components/Footer";
import KnowUs from "../Components/KnowUs";
import Partners from "../Components/Partners";
import MiniEvents from "../Components/MiniEvents";

function Home() {
  const getVisits = async () => {
    try {
      const res = await fetch(`http://localhost:5000/home`, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (err) {
      return err;
    }
  };

  useEffect(() => {
    getVisits();
    return function () {};
  }, []);
  return (
    <div>
      <Header />
      <LandingImage />
      <PageNav />
      <HomeContent1 />
      <KnowUs />
      <MiniEvents />
      <Partners /> <Hq />
      <Footer />
    </div>
  );
}

export default Home;
