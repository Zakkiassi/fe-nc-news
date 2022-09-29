import logo from "./logo.svg";
import "./App.css";
import Topics from "./components/Topics";
import Header from "./components/header";
import Articles from "./components/Articles";
import Article from "./components/Article";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Header />

      <Link to={"/"}>home page</Link>
      <Link> </Link>
      <Routes>
        <Route path="/" element={<Topics />} />
        <Route path="/articles" element={<Articles />} />

        <Route path="/articles/:article_id" element={<Article />} />
        <Route path="/topics/:topic" element={<Articles />} />
      </Routes>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
}

export default App;
