import React from 'react';
import { VscAccount } from 'react-icons/vsc';

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5 about-container">
          <h2>About Me</h2>
          {/* To change line 11 to a pic use an image tag */}
       <VscAccount fontSize={72}/>
        </div>
        <p>I am a full stack web developer who is looking to build websites that are user friendly to consumers and indispensable to the site owners. I recently earned a certificate in full stack development from the University of Irvine, with newly developed skills in JavaScript, CSS, Html, React.js, and others. Attentive to detail, I am very skilled at finding issues in codes and designing and creating apps. I am an efficient problem-solver who looks to understand what users are looking for in a web app experience and delivering quality features.
        </p>
        <p>Recently, I applied _____ to a project where I worked with a team of ___ developers. The project created a ________. I'm excited to hone my skills as a web developer with a team whose commitment to excellence and quality is prominent. 
        </p>
      </div>
    </section>
  );
}

export default About;