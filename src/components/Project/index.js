import React from "react";
import ProjectList from "../ProjectList";

function Project({ project }) {
  return (
    <article>
      <div id="work">
        <h3>{project.name}</h3>
        <a href={project.link}>
          <img src={project.img} alt={project.name} />
        </a>
      </div>
    </article>
  );
}

export default Project;
