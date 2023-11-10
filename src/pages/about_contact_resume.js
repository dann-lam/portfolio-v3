import "../App.css";
import image_6 from "../components/pics/6.png";
import image_7 from "../components/pics/7.png";
import image_8 from "../components/pics/8.png";
import cloud_4 from "../components/pics/c_4.png";
import resume from "../public/Daniel-Lam-Resume-2023.pdf";
import { parallaxData } from "../components/parallaxData";
import Plx from "react-plx";

export default function aboutContactResume() {
  return (
    <>
      <div className="aboutContact" id="contact">
        <Plx
          className="parallax-ele cloud-4"
          parallaxData={parallaxData.cloud_4}
        >
          <img src={cloud_4} alt="Cloud_4" />
        </Plx>
        <Plx
          className="parallax-ele image-6"
          parallaxData={parallaxData.image_6}
        >
          <img src={image_6} alt="Image_6" />
        </Plx>
        <Plx
          className="parallax-ele image-7"
          parallaxData={parallaxData.image_7}
        >
          <img src={image_7} alt="Image_7" />
        </Plx>
        <Plx
          className="parallax-ele image-8"
          parallaxData={parallaxData.image_8}
        >
          <img src={image_8} alt="Image_8" />
        </Plx>
        <section className="contact-container">
          <ul className="on-top">
            <li className="white-shadow contact-text">
              email: <span></span>
              <a href="mailto:dann.lam@gmail.com">&#91; Link to Email &#93;</a>
            </li>

            <li className="white-shadow contact-text">
              linkedin: <span> </span>
              <a href="https://www.linkedin.com/in/daniel-lam-1868ab26b/">
                &#91; Link to Linkedin &#93;
              </a>
            </li>
            <li className="white-shadow contact-text">
              github: <span> </span>
              <a href="https://github.com/dann-lam">
                &#91;Link to Github &#93;
              </a>
            </li>
            <li className="white-shadow contact-text">
              imdb: <span> </span>
              <a href="https://www.imdb.com/name/nm4219670/">
                &#91;Link to IMDB &#93;
              </a>
            </li>
            <li className="white-shadow contact-text">
              resume: <span> </span>
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="white-shadow resume-text"
              >
                Download Resume
              </a>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
