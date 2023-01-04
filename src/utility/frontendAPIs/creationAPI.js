import {
  PedalboardClass,
  PedalClass,
  FlickerClass,
  KnobClass,
} from "../dataClasses";
import { apiCreate } from "../backendAPIs/fetchAPI";

const addNewPedalboard = (pedalboards, setPedalboards, setActiveBoard) => {
  const pedalboard = new PedalboardClass();
  pedalboard.index = pedalboards.length;
  setActiveBoard(pedalboard);
  setPedalboards([...pedalboards, pedalboard]);
  apiCreate(pedalboard);
};

const addNewPedal = (activeBoard, setActiveBoard) => {
  const pedal = new PedalClass();
  const tempBoard = activeBoard;
  pedal.index = tempBoard.pedals.length;
  tempBoard.pedals.push(pedal);
  setActiveBoard({ ...tempBoard }); // spread into new obj to force re-render
  apiCreate(pedal, activeBoard);
};

const addNewFlicker = (openPedal, setOpenPedal) => {
  const flicker = new FlickerClass();
  const tempPedal = openPedal;
  flicker.index = tempPedal.controls.length;
  tempPedal.controls.push(flicker);
  setOpenPedal({ ...tempPedal }); // spread into new obj to force re-render
  apiCreate(flicker, openPedal);
};

const addNewKnob = (openPedal, setOpenPedal) => {
  const knob = new KnobClass();
  const tempPedal = openPedal;
  knob.index = tempPedal.controls.length;
  tempPedal.controls.push(knob);
  setOpenPedal({ ...tempPedal }); // spread into new obj to force re-render
  apiCreate(knob, openPedal);
};

export { addNewPedalboard, addNewPedal, addNewFlicker, addNewKnob };
