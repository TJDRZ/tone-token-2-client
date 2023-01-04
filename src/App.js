import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
