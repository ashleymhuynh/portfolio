import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import {
  getProject,
  updateProject,
  deleteProject,
} from "../../services/projects";
import { useParams, Redirect, useHistory } from "react-router-dom";
import "./ProjectEdit.css";
import { verifyAdmin } from "../../services/admin";

const ProjectEdit = (props) => {
  const history = useHistory();
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

  const handleDelete = () => {
    const deleteOneProject = async () => {
      await deleteProject(id);
    };
    const checkAdmin = async () => {
      await verifyAdmin();
    };
    setTimeout(() => {
      history.push("/projects");
    }, 500);
    deleteOneProject();
    checkAdmin();
  };

  return (
    <Layout admin={props.admin}>
      <section className="ProjectEdit">
        <h2 className="header-category">Edit</h2>
        <h2 className="header">{project.project_title}</h2>
        <div className="project-edit">
          <div className="project-edit-image">
            <img
              className="edit-image"
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
              <button className="submit-edit-button" type="submit">
                Submit Change!
              </button>
            </form>
          </div>
          <div className="delete-container">
            <button className="edit-delete-button" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectEdit;
