import React from "react";
import Image from "next/image";

export default function ProjectCard() {
  return (
    <div className="bg-neutral-50 px-8 py-8 gap-4 flex rounded-2xl drop-shadow-md">
      <Image
        className="rounded-2xl drop-shadow-md"
        src="/img/consulta-cep.jpeg"
        alt="Consulta Cep"
        width={650}
        height={650}
      />
      <div className="flex flex-col px-4 py-4 gap-8">
        <h3>Consulta Cep</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className="flex gap-4 justify-center items-center">
          <span className="bg-white px-4 py-4 rounded-md drop-shadow-md">
            Next.js
          </span>
          <span className="bg-white px-4 py-4 rounded-md drop-shadow-md">
            Tailwind CSS
          </span>
        </div>
        <div className="flex gap-4 justify-center items-center text-xl">
          <a
            className="flex gap-2 items-center"
            href="https://github.com/Keimich"
            target="_blank"
          >
            GitHub
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            className="flex gap-2 items-center"
            href="https://github.com/Keimich"
            target="_blank"
          >
            Live Demo
            <i className="fa-solid fa-share-from-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
