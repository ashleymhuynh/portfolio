import { useState, useEffect } from "react";
import { getAllComments, deleteComment } from "../../services/comments";
import { verifyAdmin } from "../../services/admin";
import Layout from "../../components/Layout/Layout";
import CommentForm from "../../components/CommentForm/CommentForm";
import "./Biography.css";

const Biography = (props) => {
  const [approvedComments, setApprovedComments] = useState([]);
  const [adminVerified, setAdminVerified] = useState(null);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const fetchApprovedComments = async () => {
      const allComments = await getAllComments();
      let approvedComments = [];
      allComments.map((comment) => {
        if (comment.is_approved ? approvedComments.push(comment) : null);
        return approvedComments;
      });
      setApprovedComments(approvedComments);
    };
    fetchApprovedComments();
  }, [toggleFetch]);

  useEffect(() => {
    const checkAdmin = async () => {
      const adminExist = await verifyAdmin();
      setAdminVerified(adminExist ? true : false);
    };
    checkAdmin();
  }, []);

  return (
    <Layout>
      <div className="Biography">
        <h1 className="header">Biography</h1>
        <img
          src="https://i.imgur.com/9Wt2I8f.png"
          className="biography-image"
          alt="Ashley Huynh"
        />
        <p className="about-par">
          <strong>
            FULL-STACK DEVELOPER | CREACTIVE MARKETING BAKCKROUND{" "}
          </strong>{" "}
          <br />
          She is a creative and collaborative full-stack developer with a
          background in project management and creative marketing. Ashley has a
          passion for storytelling and thrives on creating unique moments. She
          is energized by challenges and comfortable with flexibility.
        </p>
        <div className="resume-container">
          <a
            href="https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:a2483a00-2a7f-46c7-8ea7-82b99426fcda"
            target="_blank"
            rel="noreferrer"
            className="resume"
          >
            View Resume
          </a>
        </div>
        <h2 className="endorsements-header">Endorsements</h2>
        <div className="endorsements">
          {approvedComments.map((comment) => {
            return (
              <div key={comment.id} className="love-container">
                <p className="endoresment-content">"{comment.content}"</p>
                <h3 className="endoresment-name">-{comment.name}</h3>
                {adminVerified ? (
                  <button
                    onClick={() =>
                      deleteComment(
                        comment.id,
                        setToggleFetch((toggleFetch) => !toggleFetch)
                      )
                    }
                    className="delete-button"
                  >
                    Delete
                  </button>
                ) : null}
              </div>
            );
          })}
        </div>
        <div className="form">
          <CommentForm />
        </div>
      </div>
    </Layout>
  );
};

export default Biography;
