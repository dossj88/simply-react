import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <img src={coverImage} alt="cloudy background"></img>
      <h1>Jason Doss</h1>
      {/* <h2 className='header-name'>Jason Doss</h2> */}
      {props.children}
    </header>
  );
}

export default Header;