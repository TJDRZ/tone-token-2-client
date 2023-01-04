import { apiUpdateIndex, apiDelete } from "../backendAPIs/fetchAPI";

const deletePedalboard = (
  self,
  pedalboards,
  setPedalboards,
  setActiveBoard
) => {
  const tempBoards = pedalboards.filter((item) => item._id !== self._id);
  setPedalboards(
    tempBoards.map((pedalboard) => {
      pedalboard.index = tempBoards.indexOf(pedalboard);
      return pedalboard;
    })
  );
  setActiveBoard(null);
  apiDelete(self);
  pedalboards.forEach((pedalboard) => apiUpdateIndex(pedalboard));
};

const deletePedal = (
  self,
  activeBoard,
  setActiveBoard,
  openPedal,
  setOpenPedal
) => {
  const tempBoard = activeBoard;
  const tempPedals = activeBoard.pedals.filter((item) => item._id !== self._id);
  tempPedals.map((pedal) => {
    pedal.index = tempPedals.indexOf(pedal);
    return pedal;
  });
  tempBoard.pedals = tempPedals;
  setActiveBoard({ ...tempBoard }); // spread into new obj to force re-render
  if (openPedal !== null && openPedal !== undefined)
    setOpenPedal(activeBoard.pedals[0]); // sets new openPedal if pedals are the parent (in SideList)
  apiDelete(self);
  activeBoard.pedals.forEach((pedal) => apiUpdateIndex(pedal));
};

const deleteControl = (self, openPedal, setOpenPedal) => {
  const tempPedal = openPedal;
  const tempControls = tempPedal.controls.filter(
    (item) => item._id !== self._id
  );
  tempControls.map((control) => {
    control.index = tempControls.indexOf(control);
    return control;
  });
  tempPedal.controls = tempControls;
  setOpenPedal({ ...tempPedal }); // spread into new obj to force re-render
  apiDelete(self);
  openPedal.controls.forEach((control) => apiUpdateIndex(control));
};

export { deletePedalboard, deletePedal, deleteControl };
