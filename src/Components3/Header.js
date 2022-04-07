import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Navbar } from 'react-bootstrap'
export default function Header() {
  return (
   <>
        <Navbar bg="light" expand="lg">
        <Container>
          <NavLink className="navbar-brand fw-normal fs-4" to="/">
           AnimeList
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
      </Navbar>
    </>
  )
}
