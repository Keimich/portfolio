import React from "react";
import Navbar from "../components/Navbar";
import HomeSection from "../components/HomeSection";
import AboutSection from "../components/AboutSection";

function HomePage() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col">
        <section className="bg-gray-50" id="home">
          <HomeSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section className="bg-gray-50" id="project"></section>
        <section id="contact"></section>
      </div>
    </>
  );
}

export default HomePage;
