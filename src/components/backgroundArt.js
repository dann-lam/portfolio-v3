// import { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
// import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
import image_0 from "./pics/Final_Layout_Mountains_3_0016_0.png";
import image_1 from "./pics/Final_Layout_Mountains_3_0015_c_0.png";
import "../App.css";
function BackgroundArt() {
  return (
    <>
      <div className="background-container">
        <h2>Hellos</h2>
        <Parallax pages={4}>
          <ParallaxLayer>
            <h2>Hello1!</h2>
          </ParallaxLayer>

          <ParallaxLayer offset={1}>
            <h2>Hello2!</h2>
          </ParallaxLayer>
          <ParallaxLayer offset={2}>
            <h2>Hello3!</h2>
          </ParallaxLayer>
          <ParallaxLayer offset={3}>
            <h2>Hello4!</h2>
          </ParallaxLayer>
        </Parallax>
        <h2>Hellossssss</h2>
        <h2>Hellosssss2s</h2>
      </div>
    </>
  );
}

export default BackgroundArt;
