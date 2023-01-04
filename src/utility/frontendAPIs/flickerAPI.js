import { updateValueAPI } from "./updateValueAPI";

const flickerPosition = (
  firstPosition,
  secondPosition,
  thirdPosition,
  self,
  openPedal,
  setOpenPedal
) => {
  if (firstPosition.current.classList.contains("active-flicker-position")) {
    firstPosition.current.classList.toggle("active-flicker-position");
    secondPosition.current.classList.toggle("active-flicker-position");
    updateValueAPI(2, self, openPedal, setOpenPedal);
  } else if (
    secondPosition.current.classList.contains("active-flicker-position")
  ) {
    secondPosition.current.classList.toggle("active-flicker-position");
    thirdPosition.current.classList.toggle("active-flicker-position");
    updateValueAPI(3, self, openPedal, setOpenPedal);
  } else if (
    thirdPosition.current.classList.contains("active-flicker-position")
  ) {
    thirdPosition.current.classList.toggle("active-flicker-position");
    firstPosition.current.classList.toggle("active-flicker-position");
    updateValueAPI(1, self, openPedal, setOpenPedal);
  }
};

export { flickerPosition };
