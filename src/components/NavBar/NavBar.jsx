import React from 'react';
import { FaGithub, FaTwitter } from "react-icons/fa";
import './NavBar.css';

function NavBar() {

  return (
    <>
      <div className='social-links'>
        <a href='https://github.com/Shivam-Katare/Summize' target='_blank' className='socials'><FaGithub /></a>
        <a href='https://twitter.com/Shivamkatare_27' target='_blank' className='socials'> <FaTwitter /> </a>
      </div>
    </>
  );
}

export default NavBar;