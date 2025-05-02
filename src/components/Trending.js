import { Card, Container, Row, Col, Image } from "react-bootstrap";
import bigHero from "../assets/file poster film/Trending/hero.jpeg";

const Trending = () => {
  return (
    <div>
      <Container>
        <Row>

          <Col md={4} className="movie-Wrapper">
            <Card className=" text-white  movie-images">
              <Image
                src={bigHero}
                alt="BIG HERO movies"
                width="100%"
                height="auto"
                
              />
              <div className="bg-dark ">
                <div className="p-2 m-2">
                <Card.Title className="text-center">BIG HERO</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="movie-Wrapper">
            <Card className=" text-white  movie-images">
              <Image
                src={bigHero}
                alt="BIG HERO movies"
                width="100%"
                height="auto"
              />
              <div className="bg-dark ">
                <div className="p-2 m-2">
                <Card.Title className="text-center">BIG HERO</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="movie-Wrapper">
            <Card className=" text-white  movie-images">
              <Image
                src={bigHero}
                alt="BIG HERO movies"
                width="100%"
                height="auto"
              />
              <div className="bg-dark ">
                <div className="p-2 m-2">
                <Card.Title className="text-center">BIG HERO</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Trending;
