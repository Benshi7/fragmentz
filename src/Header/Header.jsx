import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import {AcmeLogo} from "./AcmeLogo.jsx";
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
      <Navbar>
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">FRAGMENTZ</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground">
              <NavLink to="/" exact>Home</NavLink>
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link  aria-current="page">
              <NavLink to="/skills" exact>Skills</NavLink>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link  color="foreground">
              <NavLink to="/projects" exact>Projects</NavLink>
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Hire us!
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
  )
}

export default Header
