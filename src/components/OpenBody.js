import "../styles/OpenBody.css";
import { useContext } from "react";
import { BoardContext } from "./Menu";
import {
  addNewPedal,
  addNewFlicker,
  addNewKnob,
} from "../utility/frontendAPIs/creationAPI";
import Card from "./Card";

function OpenBody() {
  const { activeBoard, setActiveBoard, openPedal, setOpenPedal } =
    useContext(BoardContext);

  return (
    <section className="OpenBody">
      {openPedal ? (
        <section className="OpenBody-container">
          <header className="OpenBody-header">
            <button
              className="new-flicker"
              onClick={() => addNewFlicker(openPedal, setOpenPedal)}
            >
              New Switch
            </button>
            <button
              className="new-knob"
              onClick={() => addNewKnob(openPedal, setOpenPedal)}
            >
              New Knob
            </button>
          </header>
          <ul className="OpenBody-list">
            {openPedal.controls.map((control, index) => {
              if (control.feType === "flicker") {
                return (
                  <Card
                    key={control._id}
                    feType={"flicker"}
                    self={control}
                    index={index}
                  />
                );
              } else if (control.feType === "knob") {
                return (
                  <Card
                    key={control._id}
                    feType={"knob"}
                    self={control}
                    index={index}
                  />
                );
              }
            })}
          </ul>
        </section>
      ) : (
        <section className="OpenBody-container">
          {activeBoard ? (
            <section className="ActiveBoard">
              <header className="OpenBody-header">
                <button
                  className="new-pedal"
                  onClick={() => addNewPedal(activeBoard, setActiveBoard)}
                >
                  New Pedal
                </button>
              </header>
              <ul className="OpenBody-list">
                {activeBoard.pedals.map((pedal, index) => {
                  return (
                    <Card
                      key={pedal._id}
                      feType={"pedal"}
                      self={pedal}
                      index={index}
                    />
                  );
                })}
              </ul>
            </section>
          ) : (
            <div className="No-ActiveBoard">
              Please Create or Select a Pedalboard
            </div>
          )}
        </section>
      )}
    </section>
  );
}

export default OpenBody;
