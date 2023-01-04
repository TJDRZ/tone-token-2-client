import "../styles/Move.css";
import { useContext } from "react";
import { BoardContext } from "./Menu";
import {
  movePedalboard,
  movePedal,
  moveControl,
} from "../utility/frontendAPIs/updateIndexAPI";

function Move(props) {
  const { feType, self } = props;
  const {
    pedalboards,
    setPedalboards,
    activeBoard,
    setActiveBoard,
    openPedal,
    setOpenPedal,
  } = useContext(BoardContext);

  const moveIndex = (direction) => {
    switch (feType) {
      case "pedalboard":
        movePedalboard(
          self,
          direction,
          pedalboards,
          setPedalboards,
          setActiveBoard
        );
        break;
      case "pedal":
        movePedal(self, direction, activeBoard, setActiveBoard, setOpenPedal);
        break;
      case "flicker":
        moveControl(self, direction, openPedal, setOpenPedal);
        break;
      case "knob":
        moveControl(self, direction, openPedal, setOpenPedal);
        break;
      default:
        break;
    }
  };

  return (
    <div className="Move">
      <button onClick={() => moveIndex("backwards")}>&#171;</button>
      <button onClick={() => moveIndex("forwards")}>&#187;</button>
    </div>
  );
}

export default Move;
