import React from "react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="bg-white">
      <div className="container">
        <div className="flex px-4 py-32 gap-4 max-md:flex-col max-md:py-16 max-md:items-center">
          <Image
            className="rounded-3xl max-md:w-80 max-md:h-80"
            src="/img/programming.jpg"
            alt="programming"
            width={500}
            height={500}
          />
          <div className="flex flex-col px-4 py-4 gap-4 max-md:text-center">
            <h3 className="text-blue-500 text-xl">About Me</h3>
            <h4 className="text-xl">
              A Full-Stack Developer <br /> based in São Paulo, Brazil. 🇧🇷
            </h4>
            <p className="text-gray-500 text-lg">
              I work as a junior developer, since 2021, for companies within the
              Locaweb group.
              <br />
              With this I acquired a lot of experience in both front-end and
              back-end.
              <br />
              In my job I usually use it to develop the front-end HTML, CSS,
              JavaScript and jQuery. And for the back-end I use PHP.
              <br />
              But in my personal projects I usually use Next.js, which in turn
              uses React, and Tailwind CSS.
              <br />
              Also put all my projects inside Docker containers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
