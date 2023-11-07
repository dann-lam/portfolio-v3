// import { useSpring, animated } from "@react-spring/web";
// import BackgroundArt from "./components/backgroundArt";

import ContentContainer from "./components/contentContainer";
import NavBar from "./components/navbar";
import "./App.css";

function App() {
  return (
    <div className="site-container">
      <NavBar />
      <ContentContainer />
    </div>
  );
}

export default App;
