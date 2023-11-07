import "../App.css";

import { parallaxData } from "../components/parallaxData";
import Plx from "react-plx";
import image_0 from "../components/pics/0.png";
import cloud_0 from "../components/pics/c_0_v3.png";
export default function homePage() {
  return (
    <section className="homepage" id="home">
      <Plx className="parallax-ele image-0" parallaxData={parallaxData.image_0}>
        <img src={image_0} alt="image_0" />
      </Plx>
      <Plx className="parallax-ele cloud-0" parallaxData={parallaxData.cloud_0}>
        <img src={cloud_0} alt="cloud_0" />
      </Plx>
      <h1 className="firstname grey-shadow on-top">Daniel Lam</h1>
      <h2 className="lastname grey-shadow on-top">
        full stack web developer, animator
      </h2>
    </section>
  );
}
