import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const navBar = () => {
  return (
    <>
      <Navbar bg="danger" variant="danger">
        <Container>

          <Nav>
            <Link to="/" className='text-decoration-none text-white ms-2'>🏠 Home</Link>
            <Link to="/Contact" className='text-decoration-none text-white ms-2'>📕 Contacto</Link>
          </Nav>
        </Container>
        <Container className='text-decoration-none text-white ms-2 justify-content-end'><h3>🍰 Happy Cake</h3></Container>
      </Navbar>
    </>

  )
}

export default navBar