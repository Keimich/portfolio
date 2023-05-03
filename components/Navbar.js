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

  return (
    <nav
      className="bg-white fixed px-8 py-6 w-full drop-shadow-md"
      style={{ "z-index": 1 }}
    >
      <div className="flex justify-between items-center">
        <div className="text-center text-xl">
          <a href="/">Jan.dev</a>
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
        <div className="flex flex-col text-center gap-4 h-screen pt-60">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
