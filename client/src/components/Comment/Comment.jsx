import { updateComment, deleteComment } from "../../services/comments";
import { verifyAdmin } from "../../services/admin";
import { useState } from "react";
import "./Comment.css";

const Comment = (props) => {
  const [comment, setComment] = useState({
    name: props.name,
    content: props.content,
    is_approved: "false",
  });

  const handleApproval = async (event) => {
    event.preventDefault();
    props.setToggleFetch((toggleFetch) => !toggleFetch);
    setComment({
      name: props.name,
      content: props.content,
      is_approved: true,
    });
    await updateComment(props.id, comment);
    const checkAdmin = async () => {
      await verifyAdmin();
    };
    checkAdmin();
  };

  return (
    <div className="single-endorsements-container">
      <label>Name: {props.name}</label>
      <label>Content: {props.content}</label>
      <button onClick={handleApproval}>Approved</button>
      <button onClick={() => deleteComment(props.id)}>Delete</button>
    </div>
  );
};

export default Comment;
