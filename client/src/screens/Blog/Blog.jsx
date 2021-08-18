import Layout from "../../components/Layout/Layout";
import "./Blog.css";

const Blog = () => {
  return (
    <Layout>
      <div className="Blogs">
        <h1 className="header">Bleeding Ink</h1>
        <div className="blog-container">
          <div className="blogs">
            <img
              id="morning-read"
              className="blog-image"
              alt="morning-reads"
              src="https://i.imgur.com/SZM50yf.jpeg"
            />
            <h2 className="subheader morning-read">Morning Read</h2>
          </div>
          <div className="blogs">
            <img
              id="poetry"
              className="blog-image"
              src="https://i.imgur.com/un6sjk1.jpeg"
              alt="poetry"
            />
            <h2 className="subheader poetry-header">Poetry</h2>
          </div>
          <div className="blogs">
            <img
              className="blog-image"
              id="fashion"
              src="https://i.imgur.com/zcGRtCk.jpeg"
              alt="fashion"
            />
            <h2 className="subheader">Fashion</h2>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
