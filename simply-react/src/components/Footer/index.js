import React from 'react';
// Import Icons for footer buttons
import { AiOutlineGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { BsStackOverflow } from 'react-icons/bs';

function Footer() {

  // Replace links with social media profiles
  const icons = [
    {
      name: AiOutlineGithub,
      link: "https://github.com/dossj88"
    },
    {
      name: BsLinkedin,
      link: "https://www.linkedin.com/in/jason-doss-126a64248/"
    },
    {
      name: BsStackOverflow,
      link: "https://stackoverflow.com/users/21051823/jason-doss"
    }
  ]

  return (
    <footer className="flex-row px-1">
      {icons.map((icon,index) => {
        let Icon = icon.name;
        console.log(Icon);
        return (<a href= {icon.link} target="_blank" rel="noreferrer" key={index}><Icon /></a>);
  
      })}
    </footer>
  );
}

export default Footer;
