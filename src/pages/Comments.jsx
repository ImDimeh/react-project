import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetCommentsQuery } from "../api/productApi";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
const StyledButton = styled.button`
  background-color: #1e2a38; /* Couleur de fond */
  color: #ffffff; /* Couleur du texte */
  padding: 10px 15px; /* Espacement intérieur du bouton */
  border: none; /* Supprime la bordure */
  border-radius: 5px; /* Coins arrondis */
  font-size: 14px; /* Taille de la police */
  cursor: pointer; /* Curseur pointeur au survol */
`;

// Appliquez le style aux liens
const StyledLink = styled(Link)`
  text-decoration: none; /* Supprime le soulignement du lien */
  margin-right: 10px; /* Marge à droite pour espacement */
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
        <div>
          <StyledLink to={`/comments/${id}`}>
            <StyledButton>voir les commentaire</StyledButton>
          </StyledLink>
          <StyledLink to={`/NewComment/${id}`}>
            <StyledButton>ajouter votre commentaire</StyledButton>
          </StyledLink>

          <ul>
            {comments.map(({ id, comment }) => (
              <CommentItem key={id}>{comment}</CommentItem>
            ))}
          </ul>
        </div>
      )}
    </CommentsContainer>
  );
}

