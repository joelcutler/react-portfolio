import React from "react";
import Project from "../Project";

function ProjectList() {
  const projects = [
    {
      name: "Run Buddy",
      link: "https://joelcutler.github.io/run-buddy/",
      img: "./assets/run-buddy.jpg",
    },
    {
      name: "Try My Trivia!",
      link: "https://joelcutler.github.io/try-my-trivia/",
      img: "./assets/trivia-logo-400px.png",
    },
    {
      name: "Shred It!",
      link: "https://shred-it.herokuapp.com/",
      img: "./assets/shred-it.png",
    },
    {
      name: "TaskMaster Pro",
      link: "https://joelcutler.github.io/taskmaster-pro/",
      img: "./assets/taskmaster.jpg",
    },
    {
      name: "Weather Dashboard",
      link: "https://joelcutler.github.io/weather/",
      img: "./assets/weather.jpg",
    },
  ];

  return (
    <div>
      {projects.map((project) => (
        <Project key={project.name} project={project} />
      ))}
    </div>
  );
}

export default ProjectList;
