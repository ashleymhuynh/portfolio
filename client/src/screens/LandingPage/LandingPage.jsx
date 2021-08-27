import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="Landingpage">
      <div className="lp-box">
        <div className="tv-container"></div>
        <img
          className="lp-logo"
          src={"https://i.imgur.com/WiQW8w6.png"}
          alt="logo"
        />
        <h2 className="lp-subheader" style={{ textDecoration: "none" }}>
          FULL STACK DEVELOPER | WEB DEVELOPER
        </h2>
      </div>
      <Link to={`/home`} style={{ textDecoration: "none" }}>
        <button className="lp-button">
          To Home Page {""}
          <img className="lp-arrow" src={"https://i.imgur.com/73aVRUO.png"} />
        </button>
      </Link>
    </div>
  );
};

export default LandingPage;
