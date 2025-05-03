import { Card, Container, Row, Col, Image } from "react-bootstrap";
import bigHero from "../assets/file poster film/Trending/hero.jpeg";
import Creed from "../assets/file poster film/Trending/creed.jpg.jpeg";
import GatotKaca from "../assets/file poster film/Trending/gatotkaca.jpg.jpeg";
import Joker from "../assets/file poster film/Trending/joker.jpg.jpeg";
import Starwars from "../assets/file poster film/Trending/starwars.jpg.jpeg";
import TheLion from "../assets/file poster film/Trending/thelionking.jpg.jpeg";

const Trending = () => {
  return (
    <div>
      <Container className="trending-container">
        <br />
        <h1 className="text-white ">TRENDING MOVIES</h1>
        <br />
        <Row>
          {/* // ===DISPLAY BIG HEROO== */}
          <Col  md={4} className="movie-Wrapper" id="Trending">
            <Card className=" text-white   movie-images">
              <Image
                src={bigHero}
                alt="BIG HERO movies"
                width="%"
                height="auto"
                className="images"
              />
              <div className="bg-dark ">
                <div className="p-2 m-2">
                  <Card.Title className="text-center">BIG HERO</Card.Title>
                  <Card.Text className="text-left">
                  Seorang jenius muda dan robot medis bersatu membentuk tim pahlawan untuk melawan kejahatan di San Fransokyo.
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
                src={Creed}
                alt="CREED movies"
                width="100%"
                height="auto"
                className="images"
              />
              <div className="bg-dark ">
                <div className="p-2 m-2">
                  <Card.Title className="text-center">CREED</Card.Title>
                  <Card.Text className="text-left">
                  Seorang petinju muda, anak dari Apollo Creed, berjuang membuktikan dirinya di ring tinju dengan bantuan Rocky Balboa.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          {/* // ===END ..... DISPLAY CREED...== */}

          {/* // ===DISPLAY GATOT KACA...== */}
          <Col md={4} className="movie-Wrapper">
            <Card className=" text-white  movie-images">
              <Image
                src={GatotKaca}
                alt="GATOT KACA movies"
                width="100%"
                height="auto"
                className="images"
              />
              <div className="bg-dark ">
                <div className="p-2 m-2">
                  <Card.Title className="text-center">GATOT KACA</Card.Title>
                  <Card.Text className="text-left">
                  Kisah tragis seorang komedian yang terpinggirkan dan berubah menjadi sosok kriminal ikonik di Gotham.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          {/* // === END.....DISPLAY GATOT KACA...== */}

          {/* // ===DISPLAY JOKER..=== */}
          <Col md={4} className="movie-Wrapper">
            <Card className=" text-white  movie-images">
              <Image
                src={Joker}
                alt="JOKER movies"
                width="100%"
                height="auto"
                className="images"
              />
              <div className="bg-dark ">
                <div className="p-2 m-2">
                  <Card.Title className="text-center">JOKER</Card.Title>
                  <Card.Text className="text-left">
                  Pertempuran epik antara kekuatan terang dan gelap di galaksi yang jauh, jauh sekali.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          {/* // === END...DISPLAY JOKER.== */}

          {/* // ===DISPLAY STARSWARS== */}

          <Col md={4} className="movie-Wrapper">
            <Card className=" text-white  movie-images">
              <Image
                src={Starwars}
                alt="STAR WARS movies"
                width="100%"
                height="auto"
                className="images"
              />
              <div className="bg-dark ">
                <div className="p-2 m-2">
                  <Card.Title className="text-center">STAR WARS</Card.Title>
                  <Card.Text className="text-left">
                  Pertempuran epik antara kekuatan terang dan gelap di galaksi yang jauh, jauh sekali.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          {/* // === END...DISPLAY STARSWARS== */}

          {/* // ===DISPLAY THE LION KING== */}
          <Col md={4} className="movie-Wrapper">
            <Card className=" text-white  movie-images">
              <Image
                src={TheLion}
                alt="GATOT KACA movies"
                width="100%"
                height="auto"
                className="images"
              />
              <div className="bg-dark ">
                <div className="p-2 m-2">
                  <Card.Title className="text-center">THE LION KING</Card.Title>
                  <Card.Text className="text-left">
                  Anak singa bernama Simba berjuang merebut kembali takhta dari pamannya setelah kematian ayahnya.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          {/* // ===END....DISPLAY THE LION KING== */}
        </Row>
      </Container>
    </div>
  );
};
export default Trending;
