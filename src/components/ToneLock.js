import "../styles/ToneLock.css";
import { useContext } from "react";
import { BoardContext } from "./Menu";

function ToneLock() {
  const { tonelocked, setTonelocked } = useContext(BoardContext);

  const hideDelete = () => {
    const buttons = document.querySelectorAll(".delete");
    buttons.forEach((button) => {
      button.classList.toggle("hide-delete");
    });
    tonelocked ? setTonelocked(false) : setTonelocked(true);
  };

  return (
    <div className="ToneLock">
      <div className="outer-lock" onClick={hideDelete}>
        <div className="inner-lock"></div>
      </div>
      <p>Tone Lock</p>
    </div>
  );
}

export default ToneLock;
