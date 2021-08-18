import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <header className="home-header">
        <img
          id="homescreen-logo"
          src="https://i.imgur.com/WiQW8w6.png"
          width="400"
          alt="ashley logo"
        />
      </header>
      <div className="photo">
        <img
          id="home-image"
          src="https://i.imgur.com/2Uc08HV.png"
          alt="ashley"
        />
        <q id="quote">
          “Nothing is impossosible, the word itself says I’m possible”
        </q>
      </div>
      <div className="menu-container">
        <div className="categories">
          <div className="works">Works</div>
          <div className="about">About</div>
        </div>
        <div className="list">
          <Link to="/projects" style={{ textDecoration: "none" }}>
            <h1>Projects</h1>
          </Link>
          <Link to="/blog" style={{ textDecoration: "none" }}>
            <h1>Bleeding Ink</h1>
          </Link>
          <Link to="/biography" style={{ textDecoration: "none" }}>
            <h1>Biography</h1>
          </Link>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <h1>Contact</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
