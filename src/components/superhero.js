import { Card, Container, Row, Col, Image } from "react-bootstrap";
import Avegers from "../assets/file poster film/superhero/avegers.jpg.jpeg";
import Captain from "../assets/file poster film/superhero/Captain America_ The Winter Soldier.jpeg";
import Spiderman from "../assets/file poster film/superhero/Spiderman Far From Home.jpg.jpeg";
import Venom from "../assets/file poster film/superhero/venom.jpg.jpeg";
import Wolvfrine from "../assets/file poster film/superhero/wolvfrine.jpg.jpeg";
import IronMan from "../assets/file poster film/superhero/ironman.jpg.jpeg";

const SuperHero = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white ">SUPER HERO MOVIES</h1>
        <br />
        <Row>
          {/* // ===DISPLAY BIG HEROO== */}
          <Col md={4} className="movie-Wrapper" id="SuperHero">
            <Card className=" text-white  movie-images">
              <Image
                src={Avegers}
                alt="AVENGERS movies"
                width="100%"
                height="auto"
                className="images"
              />
              <div className="bg-dark ">
                <div className="p-2 m-2">
                  <Card.Title className="text-center">AVENGERS</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          {/* // === END...DISPLAY BIG HEROO== */}

          {/* // ===DISPLAY CREED...== */}
          <Col md={4} className="movie-Wrapper">
            <Card className=" text-white  movie-images">
              <Image
                src={Captain}
                alt="CAPTAIN movies"
                width="100%"
                height="auto"
                className="images"
              />
              <div className="bg-dark ">
                <div className="p-2 m-2">
                  <Card.Title className="text-center">CAPTAIN AMERIKA</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          {/* // ===END ..... DISPLAY CAPTAIN AMERIKA..== */}

          {/* // ===DISPLAY SPIDERMAN...== */}
          <Col md={4} className="movie-Wrapper">
            <Card className=" text-white  movie-images">
              <Image
                src={Spiderman}
                alt="SPIDERMAN movies"
                width="100%"
                height="auto"
                className="images"
              />
              <div className="bg-dark ">
                <div className="p-2 m-2">
                  <Card.Title className="text-center">SPIDERMAN</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          {/* // === END.....DISPLAY SPIDERMAN...== */}

          {/* // ===DISPLAY WOLVFRINE..=== */}
          <Col md={4} className="movie-Wrapper">
            <Card className=" text-white  movie-images">
              <Image
                src={Wolvfrine}
                alt="WOLVFRINE movies"
                width="100%"
                height="auto"
                className="images"
              />
              <div className="bg-dark ">
                <div className="p-2 m-2">
                  <Card.Title className="text-center">WOLVFRINE</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          {/* // === END...DISPLAY WOLVFRINE.== */}

          {/* // ===DISPLAY VENOM== */}

          <Col md={4} className="movie-Wrapper">
            <Card className=" text-white  movie-images">
              <Image
                src={Venom}
                alt="VENOM movies"
                width="100%"
                height="auto"
                className="images"
              />
              <div className="bg-dark ">
                <div className="p-2 m-2">
                  <Card.Title className="text-center">VENOM</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          {/* // === END...DISPLAY VENOM== */}

          {/* // ===DISPLAY IRON MAN== */}
          <Col md={4} className="movie-Wrapper">
            <Card className=" text-white  movie-images">
              <Image
                src={IronMan}
                alt="IRON MAN movies"
                width="100%"
                height="auto"
                className="images"
              />
              <div className="bg-dark ">
                <div className="p-2 m-2">
                  <Card.Title className="text-center">IRON MAN</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          {/* // ===END....DISPLAY IRONMAN== */}
        </Row>
      </Container>
    </div>
  );
};
export default SuperHero;
