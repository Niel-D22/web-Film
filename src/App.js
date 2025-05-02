
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import "./style/landingpage.css";
import Intro from "./components/intro";
import Trending from "./components/Trending";

function App() {
  return (
    <div>
      {/* intro section */}
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      {/* end intor */}
{/* ===list film=== */}
<div className="trending">
<Trending/>
</div>
{/* ==end trending== */}
    </div>
  );
}

export default App;
