import "../styles/About.css";
import { useRef } from "react";

function About(props) {
  const { author, title } = props;
  const about = useRef(null);
  const slide = useRef(null);
  const ham = useRef(null);
  const bur = useRef(null);
  const ger = useRef(null);

  const info = () => {
    if (about.current.classList.contains("closed")) {
      ham.current.style.transform = "rotate(45deg) translate(22.5%, 100%)";
      bur.current.style.opacity = "0";
      ger.current.style.transform = "rotate(-45deg) translate(22.5%, -100%)";
      slide.current.style.transform = "translateX(100%)";
      author.current.style.color = "#fada5e";
      title.current.style.color = "#fada5e";
      about.current.classList.toggle("closed");
    } else {
      ham.current.style.transform = "rotate(0) translate(0)";
      bur.current.style.opacity = "1";
      ger.current.style.transform = "rotate(0) translate(0)";
      slide.current.style.transform = "translateX(-100%)";
      author.current.style.color = "#000";
      title.current.style.color = "#000";
      about.current.classList.toggle("closed");
    }
  };

  return (
    <div className="About">
      <div ref={about} className="about closed" onClick={info}>
        <div ref={ham}></div>
        <div ref={bur}></div>
        <div ref={ger}></div>
      </div>
      <div ref={slide} className="slide">
        <ul>
          <li>
            <p>
              Tired of forgetting where your knobs and switches were set as you
              change styles of music? How about what pedals you used to achieve
              that specific sound? ...Tone Token helps solve that problem.
            </p>
          </li>
          <li>
            <p>Usage:</p>
            <p>
              - Create pedalboards, with pedals inside them...and knobs and
              switches inside those too!
            </p>
            <p>- Make Active and Open Pedal will expand pedalboards and pedals, showing their inner components</p>
            <p>- Click edit to customize the name of anything.</p>
            <p>- Click on the arrows to move each card</p>
            <p>- Click on the switch icons to toggle 3 different positions.</p>
            <p>
              - Click on the desired location and/or click and drag the knob
              icons.
            </p>
            <p>
              - Click on the Tone Lock Token at the top of the main menu page to
              hide all 'Delete' buttons to prevent unhappy accidents.
            </p>
          </li>
          <li>
            <p>
              <a className="website" href="https://tjdrz.com">
                https://tjdrz.com
              </a>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
