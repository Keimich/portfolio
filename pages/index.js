import React from "react";
import Navbar from "../components/Navbar";
import HomeSection from "../components/HomeSection";
import AboutSection from "../components/AboutSection";

function HomePage() {
  return (
    <>
      <Navbar />
      <div className="container flex flex-col">
        <section id="home">
          <HomeSection />
        </section>
        <section id="about">
        </section>
        <section id="project"></section>
        <section id="contact"></section>
      </div>
    </>
  );
}

export default HomePage;
