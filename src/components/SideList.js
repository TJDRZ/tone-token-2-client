import "../styles/SideList.css";
import { useContext } from "react";
import { BoardContext } from "./Menu";
import {
  addNewPedalboard,
  addNewPedal,
} from "../utility/frontendAPIs/creationAPI";
import Card from "./Card";

function SideList() {
  const {
    pedalboards,
    setPedalboards,
    activeBoard,
    setActiveBoard,
    openPedal,
    setOpenPedal,
  } = useContext(BoardContext);

  return (
    <aside className="SideList">
      {openPedal ? (
        <section className="SideList-container">
          <header className="SideList-header">
            <button
              className="back-to-pedalboards"
              onClick={() => setOpenPedal(null)}
            >
              Back to Pedalboards
            </button>
            <button
              className="new-pedal"
              onClick={() => addNewPedal(activeBoard, setActiveBoard)}
            >
              New Pedal
            </button>
          </header>
          <ul className="SideList-list">
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
        <section className="SideList-container">
          <header className="SideList-header">
            <button
              className="new-pedalboard"
              onClick={() =>
                addNewPedalboard(pedalboards, setPedalboards, setActiveBoard)
              }
            >
              New Pedalboard
            </button>
          </header>
          <ul className="SideList-list">
            {pedalboards.map((pedalboard, index) => {
              return (
                <Card
                  key={pedalboard._id}
                  feType={"pedalboard"}
                  self={pedalboard}
                  index={index}
                />
              );
            })}
          </ul>
        </section>
      )}
    </aside>
  );
}

export default SideList;
