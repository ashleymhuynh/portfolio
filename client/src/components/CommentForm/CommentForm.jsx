import { useState } from "react";
import { createComment } from "../../services/comments";

const CommentForm = () => {
  const [comment, setComment] = useState({
    name: "",
    content: "",
    is_approved: "false",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setComment({
      ...comment,
      [name]: value,
      is_approved: false,
    });
  };

  const [isNew, setIsNew] = useState(false);

  const handleSubmit = async () => {
    const newComment = await createComment(comment);
    setIsNew(newComment);
  };

  return (
    <div className="Endorsement">
      <h4>Send Ashley Love</h4>{" "}
      <div className="endorsement-form">
        <form className="new-endorsement" onSubmit={handleSubmit}>
          <input
            name="name"
            value={comment.name}
            placeholder="Your Name"
            onChange={handleChange}
          />
          <textarea
            name="content"
            value={comment.content}
            placeholder="Love note for Ashley..."
            onChange={handleChange}
          />

          <button className="love-button" type="submit">
            Send Love!
          </button>
        </form>
        <div></div>
      </div>
    </div>
  );
};

export default CommentForm;
