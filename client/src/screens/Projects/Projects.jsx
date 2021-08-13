import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProjects } from "../../services/projects";
import Project from "../../components/Project/Project";
import Layout from "../../components/Layout/Layout";
import "./Projects.css";

const Projects = (props) => {
  const [projects, setProjects] = useState([]);

  const { admin } = props;

  useEffect(() => {
    const fetchProjects = async () => {
      const allProjects = await getProjects();
      setProjects(allProjects);
    };
    fetchProjects();
  }, []);

  return (
    <Layout admin={props.admin}>
      <div className="Projects">
        <h1>Projects</h1>
        <div className="add">
          {admin ? (
            <Link to={`/newproject`}>
              <button className="add-button">New Project</button>
            </Link>
          ) : (
            <div />
          )}
        </div>
        <div id="projects-container">
          {projects.map((project) => {
            return (
              <Project
                id={project.id}
                project_title={project.project_title}
                about={project.about}
                image_url={project.image_url}
                github_url={project.github_url}
                deploy_url={project.deploy_url}
                languages={project.languages}
                key={project.id}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
