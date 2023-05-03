import React from "react";
import Navbar from "../components/Navbar";
import HomeSection from "../components/HomeSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

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
        <section className="bg-gray-50" id="projects">
          <ProjectsSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
