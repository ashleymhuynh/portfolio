import { useState, useEffect } from "react";
import { getAllComments, deleteComment } from "../../services/comments";
import { verifyAdmin } from "../../services/admin";
import Layout from "../../components/Layout/Layout";
import CommentForm from "../../components/CommentForm/CommentForm";
import "./Biography.css";

const Biography = (props) => {
  const [approvedComments, setApprovedComments] = useState([]);
  const [adminVerified, setAdminVerified] = useState(null);

  useEffect(() => {
    const fetchApprovedComments = async () => {
      const allComments = await getAllComments();
      let approvedComments = [];
      allComments.map((comment) => {
        if (comment.is_approved ? approvedComments.push(comment) : null) {
        }
      });
      setApprovedComments(approvedComments);
    };
    fetchApprovedComments();
  }, []);

  useEffect(() => {
    const checkAdmin = async () => {
      const adminExist = await verifyAdmin();
      setAdminVerified(adminExist ? true : false);
    };
    checkAdmin();
  }, []);

  return (
    <Layout>
      <h1 className="Header">Biography</h1>
      <div className="Endorsements">
        <h4>Endorsements</h4>
        <CommentForm />
        {approvedComments.map((comment) => {
          return (
            <div key={comment.id}>
              <h1>{comment.name}</h1>
              <p>{comment.content}</p>
              {adminVerified ? (
                <button
                  onClick={() => deleteComment(comment.id)}
                  className="delete-button"
                >
                  Delete
                </button>
              ) : null}
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Biography;
