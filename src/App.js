import logo from "./logo.svg";
import "./App.css";
import Topics from "./components/Topics";
import Header from "./components/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Topics />} />
      </Routes>
    </div>
  );
}

export default App;
