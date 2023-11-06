import "../App.css";
import Plx from "react-plx";
import TechCard from "../components/techCard";

import image_4 from "../components/pics/4.png";
import image_5 from "../components/pics/5.png";

import cloud_3 from "../components/pics/c_3.png";

import stockviz from "../components/pics/stockviz.png";
import parkspot from "../components/pics/parkspot.png";
import streamy from "../components/pics/streamy.png";
import sqlemployeedb from "../components/pics/sqlemployeedb.png";
import jate from "../components/pics/jate.png";
import travlr from "../components/pics/travlr.png";

import { parallaxData } from "../components/parallaxData";

//The plan is to read a JSON file filled with our techcard info.
//For each project, feed that information into a tech card, and render our list of projects for each project in the JSON file.
//
export default function projects() {
  return (
    <>
      <div className="project" id="project">
        <Plx
          className="parallax-ele image-4"
          parallaxData={parallaxData.image_4}
        >
          <img src={image_4} alt="Image_4" />
        </Plx>
        <Plx
          className="parallax-ele cloud-3"
          parallaxData={parallaxData.cloud_3}
        >
          <img src={cloud_3} alt="Cloud_3" />
        </Plx>
        <Plx
          className="parallax-ele image-5"
          parallaxData={parallaxData.image_5}
        >
          <img src={image_5} alt="Image_5" />
        </Plx>

        <div className="project-container on-top">
          <h1 className="white-shadow contact-text project-container-text on-top">
            projects
          </h1>
          {/* I don't like that I have to put all these tech cards in a seperate div. It's gross. Listen, I've got higher prio things to take care of, and this works, this will be addressed in the future :) */}
          <div className="project-grid-container">
            <div className="project-grid-item">
              <TechCard
                className="on-top"
                image={stockviz}
                link="https://github.com/dann-lam/stock-viz"
              />
            </div>
            <div className="project-grid-item">
              <TechCard
                className="on-top"
                image={parkspot}
                link="https://github.com/dann-lam/park-app"
              />
            </div>
            <div className="project-grid-item">
              <TechCard
                className="on-top"
                image={streamy}
                link="https://github.com/dann-lam/streemy"
              />
            </div>
            <div className="project-grid-item">
              <TechCard
                className="on-top"
                image={sqlemployeedb}
                link="https://github.com/dann-lam/04-29-2023-employee-database"
              />
            </div>
            <div className="project-grid-item">
              <TechCard
                className="on-top"
                image={jate}
                link="https://github.com/dann-lam/04-29-2023-employee-database"
              />
            </div>
            <div className="project-grid-item">
              <TechCard
                className="on-top"
                image={travlr}
                link="https://github.com/dann-lam/04-08-2023-travlr"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
