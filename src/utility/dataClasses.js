import uniqid from "uniqid";

class PedalboardClass {
  constructor() {
    this._id = uniqid();
    this.name = "New Pedalboard";
    this.index = null;
    this.pedals = [];
    this.type = "pedalboard";
    this.feType = "pedalboard";
  }
}

class PedalClass {
  constructor() {
    this._id = uniqid();
    this.name = "New Pedal";
    this.index = null;
    this.controls = [];
    this.type = "pedal";
    this.feType = "pedal";
  }
}

class FlickerClass {
  constructor() {
    this._id = uniqid();
    this.name = "New Switch";
    this.index = null;
    this.value = 1;
    this.type = "control";
    this.feType = "flicker";
  }
}

class KnobClass {
  constructor() {
    this._id = uniqid();
    this.name = "New Knob";
    this.index = null;
    this.value = 0;
    this.type = "control";
    this.feType = "knob";
  }
}
export { PedalboardClass, PedalClass, FlickerClass, KnobClass };
