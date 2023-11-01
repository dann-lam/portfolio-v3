import HomePage from "../pages/home";
import Technologies from "../pages/technologies";
import AboutContactResume from "../pages/about_contact_resume";
import Projects from "../pages/project";
import Plx from "react-plx";

import "../App.css";
import { parallaxData } from "./parallaxData";

export default function pageContainer() {
  return (
    <>
      <div className="page-contained">
        <HomePage />
        <Technologies />
        <Projects />
        <AboutContactResume />
      </div>
    </>
  );
}
