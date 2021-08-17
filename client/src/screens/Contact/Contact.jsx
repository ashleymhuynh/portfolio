import Layout from "../../components/Layout/Layout";
import "./Contact.css";

const Contact = () => {
  return (
    <Layout>
      <div className="Contact">
        <h1 className="header">Contact</h1>
        <h3 className="contact-subheader">
          Lets Create Something Beautiful Together...
        </h3>
        <div className="contact-container">
          <img
            src="https://i.imgur.com/QgMAhXP.png"
            className="typewriter"
            alt="typewriter-icon"
          />
          <div className="contact-details-container">
            <a href="mailto: ashley.huynh23@gmail.com" className="email">
              <strong>Email:</strong>
              <br />
              <span>ashley.huynh23@gmail.com</span>
            </a>
            <br />
            <br />
            <a
              href="https://www.linkedin.com/in/ashley-m-huynh/"
              className="linkedin"
            >
              <strong>LinkedIn:</strong> <br />
              <span>linkedin.com/in/ashley-m-huynh/</span>
            </a>
            <br />
            <br />
            <a href="https://github.com/ashleymhuynh" className="github">
              <strong>Github:</strong> <br />
              <span>github.com/ashleymhuynh</span>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
