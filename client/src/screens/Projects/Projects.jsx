import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProjects } from "../../services/projects";
import { verifyAdmin } from "../../services/admin";
import Project from "../../components/Project/Project";
import Layout from "../../components/Layout/Layout";
import "./Projects.css";

const Projects = (props) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const allProjects = await getProjects();
      setProjects(allProjects);
    };
    fetchProjects();
  }, []);

  const [adminVerified, setAdminVerified] = useState(null);
  useEffect(() => {
    const checkAdmin = async () => {
      const adminExist = await verifyAdmin();
      setAdminVerified(adminExist ? true : false);
    };
    checkAdmin();
  }, []);

  return (
    <Layout admin={props.admin}>
      <div className="Projects">
        <h1 id="header">Projects</h1>
        <div className="add-container">
          {adminVerified ? (
            <Link to={`/newproject`}>
              <button className="add-button">New Project</button>
            </Link>
          ) : null}
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
