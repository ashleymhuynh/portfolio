import { getAllComments } from "../../services/comments";
import Comment from "../Comment/Comment";
import { useState, useEffect } from "react";

const AllComments = () => {
  const [unapprovedComments, setUnapprovedComments] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const fetchUnapprovedComments = async () => {
      const comments = await getAllComments();
      let unapprovedComments = [];
      comments.map((comment) => {
        if (!comment.is_approved ? unapprovedComments.push(comment) : null);
        return unapprovedComments;
      });
      setUnapprovedComments(unapprovedComments);
    };
    fetchUnapprovedComments();
  }, [toggleFetch]);

  return (
    <div>
      {unapprovedComments.map((unapprovedComment) => {
        return (
          <Comment
            key={unapprovedComment.id}
            id={unapprovedComment.id}
            name={unapprovedComment.name}
            content={unapprovedComment.content}
            is_approved={unapprovedComment.is_approved}
            setToggleFetch={setToggleFetch}
          />
        );
      })}
    </div>
  );
};

export default AllComments;
