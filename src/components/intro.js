import { Col, Container , Row, Button } from "react-bootstrap";
const Intro = () => {
    return (
        <div className="intro">
        <Container className="text-white d-flex justify-content-center align-items-center "  >
          <Row>
            <Col>
            <div className="title">NONTON GRATIS </div>
            <div className="title"> GAK PAKE KARCIS</div>
            <div className="introButton mt-4"></div>
            <Button className="btn btn-primary" href="#SuperHero" >Lihat Semua List</Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default Intro