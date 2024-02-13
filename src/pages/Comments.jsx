import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetCommentsQuery } from "../api/productApi";

export default function Comments() {
  const { id } = useParams();
  const { data: commentsData, isLoading } = useGetCommentsQuery(id);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (commentsData) {
      setComments(
        commentsData.filter((comment) => Object.keys(comment).length > 0)
      );
    }
  }, [commentsData]);

  return (
    <div>
      {id}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {comments.map(({ id, comment }) => (
            <li key={id}>{JSON.stringify(comment)}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
