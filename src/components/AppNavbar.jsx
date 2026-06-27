import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";


function AppNavbar({ cart }) {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="shadow-sm"
      style={{ background: "linear-gradient(90deg, #0d6efd, #6610f2)" }}
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="text-white fw-bold">
          Shoptify
        </Navbar.Brand>

        <Navbar.Toggle className="bg-light" />

        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/products" className="text-white">
              Products
            </Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link as={NavLink} to="/cart" className="text-white">
              Cart <span className="badge bg-warning text-dark">{cart.length}</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
