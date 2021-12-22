import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Aboutus from "./Aboutus";
import Services from "./Services";
import Contact from "./Contacts";
import Footer from "./Footer";
import Gallerys from "./Gallerys";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Aboutus />
      <Services/>
      <Gallerys/>
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
