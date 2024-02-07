import React from 'react'
import { Navbar, TextInput, Button} from 'flowbite-react';
import { AiOutlineSearch } from 'react-icons/ai'
import { FaMoon } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom'

import './Header.css'

const Header = () => {
  const path = useLocation().pathname;


  return (
    <Navbar className='app__nav'>
      <Link to='/' className="app__logo">
        Pocket&nbsp;
        <span className='style-span'>&#123;</span>&nbsp;<span className='logo__span'> Items: &infin;</span>&nbsp;
        <span className='style-span'>&#125;</span>
      </Link>
      <form>
        <TextInput 
          className='app__nav-search button-gradient'
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}/>
      </form>
      <Button className='button-gradient'>
        <AiOutlineSearch/>
      </Button>
      <div className='flex'>
        <Button             
          className='app__light-dark button-gradient'>
          <FaMoon/>
        </Button>
        <Link
          to="/sign-in">
          <Button
            outline
            gradientDuoTone="greenToBlue">
            Sign In
          </Button>
        </Link>
        <Navbar.Toggle />

      </div>
    <Navbar.Collapse>
      <Navbar.Link as={'div'} active={path === "/"}>
        <Link to="/">Home</Link>
      </Navbar.Link>
      <Navbar.Link as={'div'} active={path === "/about"}>
        <Link to="/about">About</Link>
      </Navbar.Link>
      <Navbar.Link as={'div'} active={path === "/poppin"} >
        <Link to="/sign-up">What's Poppin</Link>
      </Navbar.Link>
      
    </Navbar.Collapse>
    </Navbar>
  )
}

export default Header