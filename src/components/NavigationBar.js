import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="/">NilzFILM</Navbar.Brand>
          <Nav>
            <Nav.Link href="#Trending">TRENDING</Nav.Link>
            <Nav.Link href="#SuperHero">SUPER HERO</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavigationBar;
