import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="/">NilzFILM</Navbar.Brand>
          <Nav>
            <Nav.Link href="#Trending" className="nav-item">TRENDING</Nav.Link>
            <Nav.Link href="#SuperHero" className="nav-item">SUPER HERO</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavigationBar;
