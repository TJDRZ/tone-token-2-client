import {
  PedalboardClass,
  PedalClass,
  FlickerClass,
  KnobClass,
} from "../dataClasses";
import { apiGet, apiGetChild } from "../backendAPIs/fetchAPI";

const fetchPedalboardsFromDB = async (user) => {
  const dbPedalboards = await apiGet("pedalboard", user);
  // Convert db row into frontend pedalboard class
  const newDBPedalboards = await dbPedalboards.map((pedalboard) => {
    const tempBoard = new PedalboardClass();
    tempBoard._id = pedalboard._id;
    tempBoard.name = pedalboard.name;
    tempBoard.index = pedalboard.index;
    return tempBoard;
  });
  // Sort newDBPedalboards by their index in pedalboards
  newDBPedalboards.sort((a, b) => {
    return a.index - b.index;
  });
  return newDBPedalboards;
};

const fetchPedalsFromDB = async (pedalboard, user) => {
  const dbPedals = await apiGetChild("pedal", pedalboard, user);
  // Convert db row into frontend pedal class
  const newDBPedals = await dbPedals.map((pedal) => {
    const tempPedal = new PedalClass();
    tempPedal._id = pedal._id;
    tempPedal.name = pedal.name;
    tempPedal.index = pedal.index;
    return tempPedal;
  });
  // Sort newDBPedals by their index in pedals
  newDBPedals.sort((a, b) => {
    return a.index - b.index;
  });
  return newDBPedals;
};

const fetchControlsFromDB = async (pedal, user) => {
  const dbControls = await apiGetChild("control", pedal, user);
  // Convert db row into frontend pedal class
  const newDBControls = await dbControls.map((control) => {
    let tempControl = null;
    control.type === "flicker"
      ? (tempControl = new FlickerClass())
      : (tempControl = new KnobClass());
    tempControl._id = control._id;
    tempControl.name = control.name;
    tempControl.value = control.value;
    tempControl.index = control.index;
    return tempControl;
  });
  // Sort newDBControls by their index in controls
  newDBControls.sort((a, b) => {
    return a.index - b.index;
  });
  return newDBControls;
};

// Start App - GET
const startAppGET = async (setPedalboards) => {
  const boards = await fetchPedalboardsFromDB();
  await boards.forEach(async (board) => {
    const pedals = await fetchPedalsFromDB(board._id);
    await pedals.forEach(async (pedal) => {
      const controls = await fetchControlsFromDB(pedal._id);
      pedal.controls = controls;
    });
    board.pedals = pedals;
  });
  setPedalboards(boards);
};

export { startAppGET };
