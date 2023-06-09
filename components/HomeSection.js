import React from "react";
import Image from "next/image";

export default function HomeSection() {
  return (
    <div className="container">
      <div className="flex px-4 py-4 pt-32 gap-8 justify-center items-center max-md:flex-col">
        <div className="flex flex-col gap-4 max-md:gap-8">
          <h1 className="text-7xl max-md:text-5xl max-md:text-center">Full-Stack Developer</h1>
          <p className="text-3xl flex-wrap max-md:text-2xl max-md:text-center">
            Hello, I'm Jan Keimich. A Full-Stack Developer based in São Paulo,
            Brazil. 🇧🇷
          </p>
          <div className="flex gap-4 max-md:justify-center max-md:gap-8">
            <a href="https://www.linkedin.com/in/jan-keimich-25053015a/" target="_blank">
              <i className="fa-brands fa-linkedin text-3xl"></i>
            </a>
            <a href="https://github.com/Keimich" target="_blank">
              <i className="fa-brands fa-github text-3xl"></i>
            </a>
          </div>
        </div>
        <Image
          className="rounded-full"
          src="/img/me.jpeg"
          alt="Jan Keimich"
          width={450}
          height={450}
        />
      </div>
      <div className="flex px-4 py-16 gap-4 items-center text-center max-md:flex-col">
        <p className="text-2xl">Tech Stack</p>
        <p className="max-md:hidden"> | </p>
        <div className="flex gap-4 text-4xl">
          <i className="cursor-pointer text-orange-400 fa-brands fa-html5"></i>
          <i className="cursor-pointer text-blue-500 fa-brands fa-css3-alt"></i>
          <i className="cursor-pointer text-amber-300 fa-brands fa-js"></i>
          <i className="cursor-pointer text-sky-400 fa-brands fa-react"></i>
          <i className="cursor-pointer text-violet-400 fa-brands fa-php"></i>
        </div>
      </div>
    </div>
  );
}
