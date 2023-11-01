// import { useSpring, animated } from "@react-spring/web";
// import BackgroundArt from "./components/backgroundArt";

import PageContainer from "./components/pageContainer";
import NavBar from "./components/navbar";
import "./App.css";

function App() {
  return (
    <div className="inner-container">
      <NavBar />
      <PageContainer />
    </div>
  );
}

export default App;
