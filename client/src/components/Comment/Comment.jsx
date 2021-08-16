import { updateComment, deleteComment } from "../../services/comments";
import { verifyAdmin } from "../../services/admin";

import { useState } from "react";

const Comment = (props) => {
  const [comment, setComment] = useState({
    name: props.name,
    content: props.content,
    is_approved: "false",
  });

  const [adminVerified, setAdminVerified] = useState(null);

  const [isApproved, setIsApproved] = useState(false);

  const handleApproval = async (event) => {
    event.preventDefault();
    setComment({
      name: props.name,
      content: props.content,
      is_approved: true,
    });
    const approved = await updateComment(props.id, comment);
    setIsApproved(approved);

    const checkAdmin = async () => {
      const adminExist = await verifyAdmin();
      setAdminVerified(adminExist ? true : false);
    };
    checkAdmin();
  };

  return (
    <div className="endorsements-container">
      <label>Name: {props.name}</label>
      <label>Content: {props.name}</label>
      <button onClick={handleApproval}>Approved</button>
      <button onClick={() => deleteComment(props.id)}>Delete</button>
    </div>
  );
};

export default Comment;
