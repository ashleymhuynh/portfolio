import { Link } from "react-router-dom";
import "./Project.css";

const Project = (props) => {
  return (
    <div className="Project">
      <Link className="project" to={`/projects/${props.id}`}>
        <h3 className="title">{props.project_title}</h3>
        <img
          className="image"
          src={props.image_url}
          alt={props.project_title}
        />
      </Link>
    </div>
  );
};

export default Project;
