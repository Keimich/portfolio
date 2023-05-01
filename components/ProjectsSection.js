import React from "react";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <div className="container pb-8">
      <div className="flex flex-col px-4 py-4 pt-32 gap-4">
        <h3 className="text-blue-500 text-xl">Portfolio</h3>
        <h4 className="text-xl">Projects developed in unique and exclusive ways</h4>
        <ProjectCard />
      </div>
    </div>
  );
}
