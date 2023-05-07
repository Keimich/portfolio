import React from "react";
import Image from "next/image";

export default function ProjectCard() {
  return (
    <div className="bg-white px-8 py-8 gap-4 flex rounded-2xl shadow-md max-md:flex-col max-md:px-4">
      <Image
        className="rounded-2xl shadow-md"
        src="/img/consulta-cepV2.jpeg"
        alt="Consulta Cep"
        width={650}
        height={650}
      />
      <div className="flex flex-col px-4 py-4 gap-6">
        <h3 className="text-green-700 font-medium">Consulta Cep</h3>
        <p>
          Consulta CEP is an application made in Next.js and Tailwind CSS where
          it is possible to query general information of a zip code. As soon as
          the zip code query is made in the{" "}
          <a
            className="text-green-700"
            href="https://viacep.com.br/"
            target="_blank"
          >
            Viacep API
          </a>
          , the request is saved in a MySql database hosted at{" "}
          <a
            className="text-green-700"
            href="https://planetscale.com/"
            target="_blank"
          >
            Planetscale
          </a>
          . All communication between the application and the bank is done
          through the{" "}
          <a
            className="text-green-700"
            href="https://www.prisma.io/"
            target="_blank"
          >
            Prisma ORM
          </a>
          .
        </p>
        <div className="flex gap-4 justify-center items-center">
          <span className="bg-white px-4 py-4 rounded-md shadow-md">
            Next.js
          </span>
          <span className="bg-white px-4 py-4 rounded-md shadow-md">
            Tailwind CSS
          </span>
        </div>
        <div className="flex gap-4 justify-center items-center text-xl">
          <a
            className="flex gap-2 items-center"
            href="https://github.com/Keimich/consulta-cep"
            target="_blank"
          >
            GitHub
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            className="flex gap-2 items-center"
            href="https://consulta-cep.keimich.com/"
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
