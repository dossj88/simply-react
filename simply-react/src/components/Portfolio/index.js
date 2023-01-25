import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'Pokemon-Fusion',
      description: 'HTML, CSS, and JavaScript',
      link: "https://github.com",
      repo: "https://github.com"
    },
    {
      name: 'Bits-Please',
      description: 'JavaScript, Handlebars',
      link: "https://github.com",
      repo: "https://github.com"
    },

  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
