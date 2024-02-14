import React from "react";

import { useGetAllProductsQuery } from "../api/productApi";
import ProductComponents from "../components/productComponents";
import {styled} from 'styled-components'




function Header() {
  let { data, isLoading } = useGetAllProductsQuery();

  if (isLoading) {
    return <div></div>;
  }

  return (
    <ModernBlueContainer>
      <h1>There is {data.length} article</h1>
      <hr />
    </ModernBlueContainer>
  );
}

function AllProducts() {
  let { data, isLoading } = useGetAllProductsQuery();

  return (
    <ModernBlueContainer>
      <Header />

      {isLoading && !data ? (
        <div>Loading...</div>
      ) : (
        data.map((product) => (
          <ProductComponents key={product.id} product={product} />
        ))
      )}
    </ModernBlueContainer>
  );
}

export default AllProducts;


const ModernBlueContainer = styled.div`
  background-color: #282c34;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

