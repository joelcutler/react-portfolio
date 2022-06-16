import React from "react";

function Project({ project }) {
  return (
    <article>
      <div className="link-image">
        <h3>{project.name}</h3>
        <a href={project.link}>
          <img src={project.img} alt={project.name} />
        </a>
      </div>
    </article>
  );
}

export default Project;
