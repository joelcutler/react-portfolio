import React from "react";
import Project from "../Project";

import runBuddy from "../../assets/run-buddy.jpg";
import trivia from "../../assets/trivia-logo-400px.png";
import shredIt from "../../assets/shred-it.jpg";
// import taskMaster from "../../assets/taskmaster.jpg";
import weather from "../../assets/weather.jpg";
import forceFit from "../../assets/force-fit.jpg";

function ProjectList() {
  const projects = [
    {
      name: "Run Buddy",
      link: "https://joelcutler.github.io/run-buddy/",
      img: runBuddy,
    },
    {
      name: "Try My Trivia!",
      link: "https://joelcutler.github.io/try-my-trivia/",
      img: trivia,
    },
    {
      name: "Shred It!",
      link: "https://shred-it.herokuapp.com/",
      img: shredIt,
    },
    {
      name: "Force Fit",
      link: "https://force-fit-order-66.herokuapp.com/",
      img: forceFit,
    },
    // {
    //   name: "TaskMaster Pro",
    //   link: "https://joelcutler.github.io/taskmaster-pro/",
    //   img: taskMaster,
    // },
    {
      name: "Weather Dashboard",
      link: "https://joelcutler.github.io/weather/",
      img: weather,
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
