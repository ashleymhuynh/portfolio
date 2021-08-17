import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { getProject } from "../../services/projects";
import { useParams, Link } from "react-router-dom";
import { verifyAdmin } from "../../services/admin";
import "./ProjectDetail.css";

const ProjectDetail = (props) => {
  const [project, setProject] = useState(null);
  const [isLoaded, setLoaded] = useState(null);
  const [adminVerified, setAdminVerified] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProject = async () => {
      const project = await getProject(id);
      setProject(project);
      setLoaded(true);
    };

    fetchProject();
  }, [id]);

  useEffect(() => {
    const checkAdmin = async () => {
      const adminExist = await verifyAdmin();
      setAdminVerified(adminExist ? true : false);
    };
    checkAdmin();
  }, []);

  if (!isLoaded) {
    return <h1 className="loading-message">Loading</h1>;
  }

  return (
    <Layout>
      <div className="ProjectDetail">
        <h2 className="header-category">Projects</h2>
        <h2 className="header">{project.project_title}</h2>
        <section className="detail">
          <div className="detail-image">
            <img
              className="detail-image"
              src={project.image_url}
              alt={project.project_title}
            />
          </div>{" "}
          <div className="text-detail">
            <p className="detail-about">{project.about}</p>
            <p className="skills">
              <span>Skills: </span> {project.languages}
            </p>
            <div className="details-links">
              <a href={project.github_url} target="_blank" rel="noreferrer">
                Github
              </a>{" "}
              <a href={project.deploy_url} target="_blank" rel="noreferrer">
                Deployed Site
              </a>
            </div>
            <div className="line"></div>
          </div>
        </section>{" "}
        <div className="update-button">
          {adminVerified ? (
            <Link to={`/projects/${project.id}/edit`}>
              <button className="edit-button">Update</button>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
      <div>
        <Link to="/projects" className="back-button">
          Back to Projects
        </Link>
      </div>
    </Layout>
  );
};

export default ProjectDetail;
