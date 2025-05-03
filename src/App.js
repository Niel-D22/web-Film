
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import "./style/landingpage.css";
import Intro from "./components/intro";
import Trending from "./components/Trending";
import SuperHero from "./components/superhero";


function App() {
  return (
    <div>
      {/* intro section */}
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      {/* end intor */}

{/* ===trending === */}
<div className="trending">
<Trending/>
</div>
{/* ==end trending== */}

{/* super hero */}
<div className="superhero">
  <SuperHero/>
</div>
    </div>
  );
}

export default App;
