import React, { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    let button = document.querySelector("[data-mobile-menu]");
    let closeButton = document.querySelector("#closeBtn");
    let mobileMenu = document.getElementById("mobile-menu");

    button.addEventListener("click", () => {
      button.classList.toggle("hidden");
      closeButton.classList.toggle("hidden");
      mobileMenu.classList.toggle("hidden");
    });

    closeButton.addEventListener("click", () => {
      button.classList.toggle("hidden");
      closeButton.classList.toggle("hidden");
      mobileMenu.classList.toggle("hidden");
    });
  }, []);

  function closeMobileMenu() {
    let button = document.querySelector("[data-mobile-menu]");
    let closeButton = document.querySelector("#closeBtn");
    let mobileMenu = document.getElementById("mobile-menu");

    button.classList.toggle("hidden");
    closeButton.classList.toggle("hidden");
    mobileMenu.classList.toggle("hidden");
  }

  return (
    <nav className="bg-white fixed w-full top-0 px-8 py-6 shadow-md">
      <div className="flex justify-between items-center">
        <div className="text-center text-xl">
          <a href="/">Jan.Keimich</a>
        </div>
        <div className="text-center text-xl flex gap-4 hidden md:flex">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <button data-mobile-menu className="text-xl block md:hidden">
          <i className="fas fa-bars"></i>
        </button>
        <button
          data-mobile-menu
          className="text-xl block md:hidden hidden"
          id="closeBtn"
        >
          <i className="fas fa-xmark"></i>
        </button>
      </div>

      {/* mobile menu */}
      <div className="hidden" id="mobile-menu">
        <div className="flex flex-col text-center text-2xl pb-80 gap-4 h-screen justify-center">
          <a href="#home" onClick={closeMobileMenu}>
            Home
          </a>
          <a href="#about" onClick={closeMobileMenu}>
            About
          </a>
          <a href="#projects" onClick={closeMobileMenu}>
            Projects
          </a>
          <a href="#contact" onClick={closeMobileMenu}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
