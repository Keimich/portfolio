import React from "react";

export default function Footer() {
  return (
    <footer className="bg-zinc-800 px-12 py-8 text-white">
      <div className="flex justify-between">
        <p>Copyright © 2023. All rights are reserved</p>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/jan-keimich-25053015a/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin text-2xl"></i>
          </a>
          <a href="https://github.com/Keimich" target="_blank">
            <i className="fa-brands fa-github text-2xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
