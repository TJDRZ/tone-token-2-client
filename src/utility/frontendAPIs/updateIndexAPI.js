import { apiUpdateIndex } from "../backendAPIs/fetchAPI";

const directionFinder = (direction, currentIndex) => {
  let result = null;
  direction === "forwards"
    ? (result = currentIndex + 1)
    : (result = currentIndex - 1);
  if (result < 0) {
    result = 0;
  }
  return result;
};

const movePedalboard = (self, direction, pedalboards, setPedalboards) => {
  const currentIndex = pedalboards.indexOf(self);
  const destination = directionFinder(direction, currentIndex);
  const tempBoards = [...pedalboards];
  const tempSelf = tempBoards.splice(currentIndex, 1)[0];
  tempBoards.splice(destination, 0, tempSelf);
  setPedalboards(
    tempBoards.map((pedalboard) => {
      pedalboard.index = tempBoards.indexOf(pedalboard);
      return pedalboard;
    })
  );
  pedalboards.forEach((pedalboard) => apiUpdateIndex(pedalboard));
};

const movePedal = (self, direction, activeBoard, setActiveBoard) => {
  const currentIndex = activeBoard.pedals.indexOf(self);
  const destination = directionFinder(direction, currentIndex);
  const tempPedals = [...activeBoard.pedals];
  const tempSelf = tempPedals.splice(currentIndex, 1)[0];
  tempPedals.splice(destination, 0, tempSelf);
  tempPedals.map((pedal) => {
    pedal.index = tempPedals.indexOf(pedal);
    return pedal;
  });
  const tempBoard = activeBoard;
  tempBoard.pedals = tempPedals;
  setActiveBoard({ ...tempBoard }); // spread into new obj to force re-render
  activeBoard.pedals.forEach((pedal) => apiUpdateIndex(pedal));
};

const moveControl = (self, direction, openPedal, setOpenPedal) => {
  const currentIndex = openPedal.controls.indexOf(self);
  const destination = directionFinder(direction, currentIndex);
  const tempControls = [...openPedal.controls];
  const tempSelf = tempControls.splice(currentIndex, 1)[0];
  tempControls.splice(destination, 0, tempSelf);
  tempControls.map((control) => {
    control.index = tempControls.indexOf(control);
    return control;
  });
  const tempPedal = openPedal;
  tempPedal.controls = tempControls;
  setOpenPedal({ ...tempPedal }); // spread into new obj to force re-render
  openPedal.controls.forEach((control) => apiUpdateIndex(control));
};

export { movePedalboard, movePedal, moveControl };
