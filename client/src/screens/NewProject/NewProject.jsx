import { useState } from "react";
import { Redirect } from "react-router";

import { newProject } from "../../services/projects";
import Layout from "../../components/Layout/Layout";
import "./NewProject.css";

const NewProject = (props) => {
  const [project, setProject] = useState({
    project_title: "",
    about: "",
    image_url: "",
    github_url: "",
    deploy_url: "",
    languages: "",
    admin_id: 1,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProject({
      ...project,
      [name]: value,
      admin_id: 1,
    });
  };

  const [isNew, setIsNew] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newP = await newProject(project);
    setIsNew(newP);
  };

  if (isNew) {
    return <Redirect to={"/projects"} />;
  }

  return (
    <Layout admin={props.admin}>
      <div clasName="NewProject">
        <h1>New Project</h1>
      </div>{" "}
      <div className="new-details">
        <form className="new-project" onSubmit={handleSubmit}>
          <label>Project Title:</label>
          <input
            name="project_title"
            value={project.project_title}
            onChange={handleChange}
          />
          <label>Description:</label>
          <input
            type="text"
            name="about"
            value={project.about}
            onChange={handleChange}
          />
          <label>Image URL:</label>
          <input
            type="text"
            name="image_url"
            value={project.image_url}
            onChange={handleChange}
          />
          <label>Github URL:</label>
          <input
            type="text"
            name="github_url"
            value={project.github_url}
            onChange={handleChange}
          />
          <label>Deployed URL:</label>
          <input
            type="text"
            name="deploy_url"
            value={project.deploy_url}
            onChange={handleChange}
          />
          <label>Languages/Skills:</label>
          <input
            type="text"
            name="languages"
            value={project.languages}
            onChange={handleChange}
          />
          <button className="edit-button" type="submit">
            Submit Change!
          </button>
        </form>
        <div></div>
      </div>
    </Layout>
  );
};

export default NewProject;
