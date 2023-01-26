import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'Pokemon-Fusion',
      description: 'HTML, CSS, JavaScript, Foundation, and APIs',
      link: "https://wangbrian26.github.io/Pokemon-Fusion-Battle-Simulator/",
      repo: "https://github.com/wangbrian26/Pokemon-Fusion-Battle-Simulator"
    },
    {
      name: 'Bits-Please',
      description: 'JavaScript, Handlebars, Node.js, Express.js. Sequelize ORM, and Heroku',
      link: "https://damp-river-11459.herokuapp.com/",
      repo: "https://github.com/monysary/Bits-Please-Chat"
    },
     {
      name: 'Weather-App',
      description: 'HTML/CSS, JavaScript',
      link: "https://dossj88.github.io/animated-barnacle/",
      repo: "https://github.com/dossj88/animated-barnacle"
    },
     {
      name: 'Java-Quiz',
      description: 'HTML/CSS, JavaScript',
      link: "https://dossj88.github.io/stunning-system/",
      repo: "https://github.com/dossj88/stunning-system"
    },
     {
      name: 'Password-Generator',
      description: 'HTML/CSS, JavaScript',
      link: "https://dossj88.github.io/psychic-garbanzo/",
      repo: "https://github.com/dossj88/psychic-garbanzo"
    },
     {
      name: 'Note-Taker',
      description: 'HTML/CSS, Node.js, Express.js, and JavaScript',
      link: "https://limitless-scrubland-97242.herokuapp.com/",
      repo: "https://github.com/dossj88/supreme-broccoli"
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
