import HomePage from "../pages/home";
import Technologies from "../pages/technologies";
import AboutContactResume from "../pages/about_contact_resume";
import Projects from "../pages/project";

import "../App.css";

export default function contentContainer() {
  return (
    <>
      <main className="content-wrapper">
        <HomePage />
        <Technologies />
        <Projects />
        <AboutContactResume />
      </main>
    </>
  );
}
