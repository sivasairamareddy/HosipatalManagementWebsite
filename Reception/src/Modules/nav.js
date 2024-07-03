import "./NAVBAR.css";
import Img from "./comps/images/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Nav, Navbar, Container } from "react-bootstrap";

function NAVBAR() {
  return (
    <Navbar className="nav" expand="md" style={{ background: "white" }}>
      <Container>
        <Navbar.Brand href="home">
          <img src={Img} className="App-logo" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div>
            <Nav className="me-auto ">
              <Nav.Link className="navContent" href="/">
                Home
              </Nav.Link>
              <Nav.Link className="navContent" href="/login">
                Doctor Login
              </Nav.Link>
              <Nav.Link className="navContent" href="/login2">
                Receptionist Login
              </Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NAVBAR;
