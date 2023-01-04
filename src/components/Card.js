import "../styles/Card.css";
import "../styles/Flicker.css";
import { useState, useEffect, useRef, useContext } from "react";
import { BoardContext } from "./Menu";
import { Basic } from "react-dial-knob";
import Input from "./Input";
import Move from "./Move";
import Delete from "./Delete";
import { nameChangeAPI } from "../utility/frontendAPIs/nameChangeAPI";
import { updateValueAPI } from "../utility/frontendAPIs/updateValueAPI";
import { flickerPosition } from "../utility/frontendAPIs/flickerAPI";

function Card(props) {
  const { feType, self } = props;
  const {
    pedalboards,
    setPedalboards,
    activeBoard,
    setActiveBoard,
    openPedal,
    setOpenPedal,
  } = useContext(BoardContext);

  // Name Change
  const [nameChange, setNameChange] = useState([]);

  useEffect(() => {
    nameChangeAPI(
      feType,
      nameChange,
      pedalboards,
      setPedalboards,
      activeBoard,
      setActiveBoard,
      openPedal,
      setOpenPedal
    );
  }, [nameChange]);

  // Flicker
  const firstPosition = useRef();
  const secondPosition = useRef();
  const thirdPosition = useRef();

  // Knob
  const [value, setValue] = useState(self.value);

  useEffect(() => {
    if (feType === "knob") {
      updateValueAPI(value, self, openPedal, setOpenPedal);
    }
  }, [value]);

  // Knob Diameter Responsiveness
  const [viewport, setViewport] = useState(window.innerWidth);
  const breakpoint = 615;

  useEffect(() => {
    const handleResizeWindow = () => setViewport(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  return (
    <li className="Card-li">
      {(() => {
        switch (feType) {
          case "pedalboard":
            return (
              <div className="Card">
                <div className="card-name">
                  <Input
                    type="text"
                    name="Pedalboard Name"
                    placeholder="Enter a pedalboard name"
                    setNameChange={setNameChange}
                    item={self}
                  />
                </div>
                <div className="card-buttons">
                  <button
                    className={`${
                      activeBoard && activeBoard._id === self._id
                        ? "active"
                        : null
                    }`}
                    onClick={() => setActiveBoard(self)}
                  >
                    Make Active
                  </button>
                  <Move feType={feType} self={self} />
                  <Delete feType={feType} self={self} />
                </div>
              </div>
            );
          case "pedal":
            return (
              <div className="Card">
                <div className="card-name">
                  <Input
                    type="text"
                    name="Pedal Name"
                    placeholder="Enter a pedal name"
                    setNameChange={setNameChange}
                    item={self}
                  />
                </div>
                <div className="card-buttons">
                  <button
                    className={`${
                      openPedal && openPedal._id === self._id ? "active" : null
                    }`}
                    onClick={() => setOpenPedal(self)}
                  >
                    Open
                  </button>
                  <Move feType={feType} self={self} />
                  <Delete feType={feType} self={self} />
                </div>
              </div>
            );
          case "flicker":
            return (
              <div className="Card">
                <div
                  className="Flicker"
                  onClick={() =>
                    flickerPosition(
                      firstPosition,
                      secondPosition,
                      thirdPosition,
                      self,
                      openPedal,
                      setOpenPedal
                    )
                  }
                >
                  <div
                    className={`flicker-dot flicker-position-one ${
                      self.value === 1 ? "active-flicker-position" : null
                    }`}
                    ref={firstPosition}
                  ></div>
                  <div
                    className={`flicker-dot flicker-position-two ${
                      self.value === 2 ? "active-flicker-position" : null
                    }`}
                    ref={secondPosition}
                  ></div>
                  <div
                    className={`flicker-dot flicker-position-three ${
                      self.value === 3 ? "active-flicker-position" : null
                    }`}
                    ref={thirdPosition}
                  ></div>
                </div>
                <div className="card-name">
                  <Input
                    type="text"
                    name="Switch Name"
                    placeholder="Enter a switch name"
                    setNameChange={setNameChange}
                    item={self}
                  />
                </div>
                <div className="card-buttons">
                  <Move feType={feType} self={self} />
                  <Delete feType={feType} self={self} />
                </div>
              </div>
            );
          case "knob":
            return (
              <div className="Card">
                <Basic
                  className="Knob"
                  diameter={viewport > breakpoint ? 100 : 80}
                  min={0}
                  max={359}
                  step={1}
                  value={value}
                  theme={{
                    defaultColor: "#000",
                    activeColor: "#fada5e",
                    gradientStart: "#bcb499",
                    gradientEnd: "#efd475",
                  }}
                  onValueChange={setValue}
                ></Basic>
                <div className="card-name">
                  <Input
                    type="text"
                    name="Knob Name"
                    placeholder="Enter a knob name"
                    setNameChange={setNameChange}
                    item={self}
                  />
                </div>
                <div className="card-buttons">
                  <Move feType={feType} self={self} />
                  <Delete feType={feType} self={self} />
                </div>
              </div>
            );
          default:
            break;
        }
      })()}
    </li>
  );
}

export default Card;
