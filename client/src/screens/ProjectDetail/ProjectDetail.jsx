import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { getProject } from "../../services/projects";
import { useParams, Link } from "react-router-dom";
import "./ProjectDetail.css";

const ProjectDetail = (props) => {
  const [project, setProject] = useState(null);
  const [isLoaded, setLoaded] = useState(null);
  const { id } = useParams();

  const { admin } = props;

  useEffect(() => {
    const fetchProject = async () => {
      const project = await getProject(id);
      setProject(project);
      setLoaded(true);
    };
    fetchProject();
  }, [id]);

  if (!isLoaded) {
    return <h1 className="loading-message">Loading</h1>;
  }

  return (
    <Layout admin={props.admin}>
      <div className="ProjectDetail">
        <h2 className="header category">Projects</h2>
        <h2 className="project_header">{project.project_title}</h2>
        <section className="detail">
          <div className="detail-image">
            <img
              className="image"
              src={project.image_url}
              alt={project.project_title}
              width="300"
            />
          </div>{" "}
          <div className="text-detail">
            <p className="detail-about">{project.about}</p>
            <a href={project.github_url} target="_blank" rel="noreferrer">
              Github
            </a>{" "}
            <a href={project.deploy_url} target="_blank" rel="noreferrer">
              Deployed Site
            </a>{" "}
          </div>
        </section>{" "}
        <div className="update-button">
          {admin ? (
            <Link to={`/projects/${project.id}/edit`}>
              <button className="edit-button">Update</button>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetail;
