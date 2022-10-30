import logo from "./logo.svg";
import "./CSS/App.css";
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
      <div className="navbar">
        <Header />

        <Link className="hover:bg-sky-700 text-xl" to={"/"}>home page</Link>
      </div>
      <main>
        <div className="pageLayout">
          <Routes>
            <Route path="/" element={<Topics />} />
            <Route path="/articles" element={<Articles />} />

            <Route path="/articles/:article_id" element={<Article />} />
            <Route path="/topics/:topic" element={<Articles />} />
          </Routes>
        </div>
      </main>
      <div className="backBtn">
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
    </div>
  );
}

export default App;
