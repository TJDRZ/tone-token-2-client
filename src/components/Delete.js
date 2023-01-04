import { useContext } from "react";
import { BoardContext } from "./Menu";
import {
  deletePedalboard,
  deletePedal,
  deleteControl,
} from "../utility/frontendAPIs/deletionAPI";

function Delete(props) {
  const { feType, self } = props;
  const {
    pedalboards,
    setPedalboards,
    activeBoard,
    setActiveBoard,
    openPedal,
    setOpenPedal,
    tonelocked,
  } = useContext(BoardContext);

  return (
    <button
      className={`delete ${tonelocked ? "hide-delete" : ""}`}
      onClick={() => {
        switch (feType) {
          case "pedalboard":
            deletePedalboard(self, pedalboards, setPedalboards, setActiveBoard);
            break;
          case "pedal":
            deletePedal(
              self,
              activeBoard,
              setActiveBoard,
              openPedal,
              setOpenPedal
            );
            break;
          case "flicker":
            deleteControl(self, openPedal, setOpenPedal);
            break;
          case "knob":
            deleteControl(self, openPedal, setOpenPedal);
            break;
          default:
            break;
        }
      }}
    >
      Delete
    </button>
  );
}

export default Delete;
