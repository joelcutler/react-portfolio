import React from "react";
import resume from "../assets/resume.jpg";

function Resume() {
  return (
    <section className="link-image">
      <h2 className="section-title">Resume</h2>

      <a id="resume" href={resume} download>
        <img src={resume} alt="lorem ipsum resume" />
      </a>
      <p>To Download, right-click this image and select 'Save Link As'</p>
    </section>
  );
}

export default Resume;
