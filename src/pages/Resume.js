import React from "react";

function Resume() {
  return (
    <section className="link-image">
      <h2 className="section-title">Resume</h2>

      <a id="resume" href="./assets/resume.jpg" download>
        <img src="./assets/resume.jpg" alt="lorem ipsum resume" />
      </a>
      <p>To Download, right-click this image and select 'Save Link As'</p>
    </section>
  );
}

export default Resume;
