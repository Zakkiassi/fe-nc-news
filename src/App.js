import logo from "./logo.svg";
import "./App.css";
import Topics from "./components/Topics";
import Header from "./components/header";
import Articles from "./components/Articles";
import Article from "./components/Article";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Topics />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:article_id" element={<Article />} />
        <Route path="/topics/:topic" element={<Articles />} />
      </Routes>
    </div>
  );
}

export default App;
