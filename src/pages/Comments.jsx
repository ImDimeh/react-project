import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetCommentsQuery } from "../api/productApi";
import styled from "styled-components";

const CommentsContainer = styled.div`
  background-color: #282c34;
  color: white;
  min-height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const CommentItem = styled.li`
  margin-bottom: 10px;
  padding: 8px;
  background-color: #3498db; /* Bleu moderne */
  color: #fff;
  border-radius: 4px;
  list-style-type: none; /* Supprime les puces/bullets */
`;

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
    <CommentsContainer>
      {id}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {comments.map(({ id, comment }) => (
            <CommentItem key={id}>{comment}</CommentItem>
          ))}
        </ul>
      )}
    </CommentsContainer>
  );
}
