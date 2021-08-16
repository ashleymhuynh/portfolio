import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <Link to={`/home`}>
      <div className="Landingpage">
        {/* <img
          className="logo"
          src={"https://i.imgur.com/WiQW8w6.png"}
          alt="logo"
          width="500"
        /> */}
      </div>
    </Link>
  );
};

export default LandingPage;
