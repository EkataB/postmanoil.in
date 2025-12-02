import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "iPresent – GPS Based Attendance System",
    description: "Automates student attendance using GPS technology. Ensures accuracy and eliminates manual errors.",
    tech: "React, GPS API, HTML, CSS, JavaScript",
  },
  {
    title: "Question Paper Repository System",
    description: "Organizes and provides access to past academic resources like question papers.",
    tech: "HTML, CSS, JavaScript",
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="card-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tech Used:</strong> {project.tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
