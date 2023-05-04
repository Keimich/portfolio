import React from "react";

export default function Footer() {
  return (
    <footer className="bg-zinc-800 px-12 py-8 text-white">
      <div className="flex justify-between max-md:flex-col max-md:text-center max-md:px-0 max-md:gap-4 max-md:text-sm">
        <p>Copyright © 2023. All rights are reserved</p>
        <div className="flex gap-4 max-md:justify-center text-2xl max-md:gap-8">
          <a
            href="https://www.linkedin.com/in/jan-keimich-25053015a/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/Keimich" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
