import React, { useEffect } from "react";
import { useGetCommentsQuery } from "../api/productApi";
import styled from "styled-components";
import { Link } from "react-router-dom";

function ProductComponents(props) {
  const { comments, isLoading } = useGetCommentsQuery(props.product.id);

  return (
    <ProductCard>
      {isLoading && !comments ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h2>{props.product.title}</h2>
          <ProductImage src={props.product.image} alt={props.product.title} />
          <ProductInfo>
            <h2>PRIX: {props.product.price}</h2>
            <QuantityInfo>QUANTITé: {props.product.quantity}</QuantityInfo>
          </ProductInfo>
          <StyledLink to={`/comments/${props.product.id}`}>
            <StyledButton>voir les commentaire</StyledButton>
          </StyledLink>
          <StyledLink to={`/NewComment/${props.product.id}`}>
            <StyledButton>ajouter votre commentaire</StyledButton>
          </StyledLink>
        </div>
      )}
    </ProductCard>
  );
}
export default ProductComponents;


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



const ProductCard = styled.div`
  background-color: #3498db;
  color: white;
  padding: 20px;
  margin: 10px;
  border-radius: 4px;
`;

const ProductImage = styled.img`
  
  height: auto;
  whidth: 10%;
  height: 10%;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 10px;
`;

const QuantityInfo = styled.div`
  margin-top: 10px;
`;
