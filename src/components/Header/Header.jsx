import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import {AcmeLogo} from "./AcmeLogo.jsx";
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
      <Navbar className="text-secondary bg-gray" css={{
        $$navbarBackgroundColor: "red",
        $$navbarBlurBackgroundColor: "red"}}>
        <NavbarBrand className="text-primary">
          <img src={"https://i.imgur.com/B9CXwja.png"} alt="Fragmentz Logo"/>
          <p className="font-bold text-inherit text-secondary">FRAGMENTZ</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="secondary">
              <NavLink to="/" exact>Home</NavLink>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link aria-current="page" color="secondary">
              <NavLink to="/about" exact>About</NavLink>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link aria-current="page" color="secondary">
              <NavLink to="/skills" exact>Skills</NavLink>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="secondary">
              <NavLink to="/projects" exact>Projects</NavLink>
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button as={Link} color="primary" variant="flat">
              <NavLink to="/contact" exact className="text-secondary">Contact Us</NavLink>
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
  )
}

export default Header
