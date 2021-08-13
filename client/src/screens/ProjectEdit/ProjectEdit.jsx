import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import {
  getProject,
  updateProject,
  deleteProject,
} from "../../services/projects";
import { useParams, Redirect } from "react-router-dom";
import "./ProjectEdit.css";
import { verifyAdmin } from "../../services/admin";

const ProjectEdit = (props) => {
  const [project, setProject] = useState({
    project_title: "",
    about: "",
    image_url: "",
    github_url: "",
    deploy_url: "",
    languages: "",
  });

  const [isUpdated, setUpdated] = useState(false);

  let { id } = useParams();

  const [adminVerified, setAdminVerified] = useState(null);
  useEffect(() => {
    const fetchProject = async () => {
      const project = await getProject(id);
      setProject(project);
    };
    const checkAdmin = async () => {
      const adminExist = await verifyAdmin();
      setAdminVerified(adminExist ? true : false);
    };
    checkAdmin();
    fetchProject();
  }, [id, adminVerified]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProject({
      ...project,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updated = await updateProject(id, project);
    setUpdated(updated);
  };
  if (isUpdated) {
    return <Redirect to={`/projects/${id}`} />;
  }

  return (
    <Layout admin={props.admin}>
      <section className="ProjectEdit">
        <div className="detail-image">
          <img
            className="image"
            src={project.image_url}
            alt={project.project_title}
            width="300"
          />
        </div>{" "}
        <div className="edit-details">
          <form className="edit-form" onSubmit={handleSubmit}>
            <label>Project Title:</label>
            <input
              name="project_title"
              id="title-input"
              value={project.project_title}
              autoFocus
              onChange={handleChange}
            />
            <label>Description:</label>
            <textarea
              name="about"
              value={project.about}
              autoFocus
              onChange={handleChange}
            />
            <label>Image URL:</label>
            <input
              type="text"
              name="image_url"
              value={project.image_url}
              autoFocus
              onChange={handleChange}
            />
            <label>Github URL:</label>
            <input
              type="text"
              name="github_url"
              value={project.github_url}
              autoFocus
              onChange={handleChange}
            />
            <label>Deployed URL:</label>
            <input
              type="text"
              name="deployed_url"
              value={project.deploy_url}
              autoFocus
              onChange={handleChange}
            />
            <label>Languages/Skills:</label>
            <input
              type="text"
              name="languages"
              value={project.languages}
              autoFocus
              onChange={handleChange}
            />
            <button className="edit-button" type="submit">
              Submit Change!
            </button>
          </form>
          <div>
            <button
              className="delete-button"
              onClick={() => deleteProject(project.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectEdit;
