import "../styles/Menu.css";
import { useState, useRef, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import About from "./About";
import ToneLock from "./ToneLock";
import SideList from "./SideList";
import OpenBody from "./OpenBody";
import { startAppGET } from "../utility/frontendAPIs/startAppFetch";
export const BoardContext = createContext();

function Menu() {
  const author = useRef(null);
  const title = useRef(null);
  const [pedalboards, setPedalboards] = useState([]);
  const [activeBoard, setActiveBoard] = useState(null);
  const [openPedal, setOpenPedal] = useState(null);
  const [tonelocked, setTonelocked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    startAppGET(setPedalboards);
  }, []);

  const logout = () => {
    localStorage.removeItem("tone-token-user");
    navigate("/");
  };

  return (
    <BoardContext.Provider
      value={{
        pedalboards,
        setPedalboards,
        activeBoard,
        setActiveBoard,
        openPedal,
        setOpenPedal,
        tonelocked,
        setTonelocked,
      }}
    >
      <main className="Menu">
        <header className="header">
          <About author={author} title={title} />
          <div>
            <h2 ref={author} className="author">
              TJDRZ's
            </h2>
            <h1 ref={title} className="title">
              Tone Token
            </h1>
            <button onClick={logout}>Log Out</button>
          </div>
          <ToneLock />
        </header>
        <SideList />
        <OpenBody />
      </main>
    </BoardContext.Provider>
  );
}

export default Menu;
