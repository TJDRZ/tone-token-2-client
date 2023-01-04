import { HashRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Login from "./components/Login";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
