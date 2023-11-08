import { useState, useEffect } from "react";

export default function TechCard(props) {
  //Take info in, and set them into the cards, disp[laying the info.
  const [isHovered, setIsHovered] = useState(false);
  const [isTapped, setIsTapped] = useState(false);
  const mouseEnter = () => {
    setIsHovered(true);
  };

  const mouseExit = () => {
    setIsHovered(false);
  };
  const touchEnter = () => {
    setIsTapped(true);
  };

  const touchExit = () => {
    setIsTapped(false);
  };
  //useEffect cleansup the mounting and unmounting process of our state.
  useEffect(() => {
    return () => setIsHovered(false);
  }, []);

  //on mouseEnter --> I want to reveal a button or div that is a link to the project that we feed from the prop.
  //On mouseExit --> return it to normal.
  //Conditionally render our link div that is an overlay of our card.
  //Our image and link is encased in the same div so that the link can be absolutely positioned. If I leave it in project-card-container, then it will position itself on the container itself, which we don't want.
  //Blurring is conditionally rendered, as well as the link visibility.
  //the isHovered conditional might be unnecessary, we can fix that.

  return (
    <>
      <div
        className={`project-card-container`}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseExit}
        onTouchStart={touchEnter}
        onTouchEnd={touchExit}
      >
        <div className={`project-card-content`}>
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            <img
              src={props.image}
              alt="project icon"
              className={`project-icon ${
                isHovered || isTapped ? "blurred" : ""
              }`}
            ></img>
          </a>
          {isHovered && (

            <a href={props.link} target="_blank" rel="noopener noreferrer">
              <div
                className={`project-link ${
                  isHovered || isTapped ? "visible" : ""
                } on-top`}
              >
                <p>Visit Site</p>
              </div>
            </a>
          )}
        </div>
      </div>
    </>
  );
}
