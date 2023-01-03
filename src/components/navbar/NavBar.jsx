import React from 'react';
import {RiMenu3Lines, RiCloseLin} from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.svg';

const NavBar = () => {
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='gpt3__navbar-links_containter'>
          <p><a href='#home'>Home</a></p>
          <p><a href='#wgpt3'>What is GPT3</a></p>
          <p><a href='#possibility'>Open AI</a></p>
          <p><a href='features'>Create Studies</a></p>
          <p><a href='blog'>Library</a></p>
        </div>
      </div>
    </div>
  )
}

export default NavBar