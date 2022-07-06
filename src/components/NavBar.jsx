import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(
    sessionStorage.getItem("email") || false
  );

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        {isOpen ? (
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        ) : (
          <Container>
            <Navbar.Brand href="#">Clarusway</Navbar.Brand>
          </Container>
        )}
      </Navbar>
    </div>
  );
};

export default NavBar;
