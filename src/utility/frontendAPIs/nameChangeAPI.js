import { apiNameChange } from "../backendAPIs/fetchAPI";

const nameChangeAPI = (
  feType,
  nameChange,
  pedalboards,
  setPedalboards,
  activeBoard,
  setActiveBoard,
  openPedal,
  setOpenPedal
) => {
  switch (feType) {
    case "pedalboard":
      const tempPedalboards = pedalboards;
      tempPedalboards.forEach((pedalboard) => {
        if (pedalboard._id === nameChange[1]) {
          pedalboard.name = nameChange[0];
          apiNameChange(pedalboard);
        }
      });
      setPedalboards(tempPedalboards);
      break;
    case "pedal":
      if (activeBoard) {
        const tempBoard = activeBoard;
        tempBoard.pedals.forEach((pedal) => {
          if (pedal._id === nameChange[1]) {
            pedal.name = nameChange[0];
            apiNameChange(pedal);
          }
        });
        setActiveBoard(tempBoard);
      }
      break;
    case "knob":
      if (openPedal) {
        const tempPedal = openPedal;
        tempPedal.controls.forEach((control) => {
          if (control._id === nameChange[1]) {
            control.name = nameChange[0];
            apiNameChange(control);
          }
        });
        setOpenPedal(tempPedal);
      }
      break;
    case "flicker":
      if (openPedal) {
        const tempPedal = openPedal;
        tempPedal.controls.forEach((control) => {
          if (control._id === nameChange[1]) {
            control.name = nameChange[0];
            apiNameChange(control);
          }
        });
        setOpenPedal(tempPedal);
      }
      break;
    default:
      break;
  }
};

export { nameChangeAPI };
