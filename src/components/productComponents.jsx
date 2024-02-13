import React, { useEffect } from "react";
import { useGetCommentsQuery } from "../api/productApi";

function ProductComponents(props) {
  const { comments, isLoading } = useGetCommentsQuery(props.product.id);

  useEffect(() => {
    if (isLoading) {
      console.log("Chargement en cours...");
    } else {
      console.log("Chargement terminé.");
      console.log("Comments:", comments , isLoading, props.product.id);
    }
  }, [isLoading, comments, props.product.id]);
  console.log(comments)
  return (
    <div>
      {isLoading && !comments ? (
        <div>Loading...</div>
      ) : (
        <div className="productCard">
          <h2>{props.product.title}</h2>
          <img src={props.product.image} alt={props.product.title} />
          <h2>PRIX:{props.product.price}</h2>
          <h2>QUANTITé : {props.product.quantity}</h2>
         
          
          
        </div>
      )}
    </div>
  );
}

export default ProductComponents;
