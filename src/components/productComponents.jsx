import React, { useEffect } from "react";
import { useGetCommentsQuery } from "../api/productApi";
import styled from "styled-components";

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
        </div>
      )}
    </ProductCard>
  );
}
export default ProductComponents;




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
