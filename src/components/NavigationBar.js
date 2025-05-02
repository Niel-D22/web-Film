import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand>NilzFILM</Navbar.Brand>
          <Nav>
            <Nav.Link >TRENDING</Nav.Link>
            <Nav.Link>SUPER HERO</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavigationBar;
