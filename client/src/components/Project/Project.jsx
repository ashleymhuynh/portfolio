import { Link } from "react-router-dom";
import "./Project.css";

const Project = (props) => {
  return (
    <div className="Project">
      <Link className="project" to={`/projects/${props.id}`}>
        <h3 className="title">{props.project_title}</h3>
      </Link>
    </div>
  );
};

export default Project;
