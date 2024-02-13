import React from "react";

import { useGetAllProductsQuery } from "../api/productApi";
import ProductComponents from "../components/productComponents";




function Header() {
  let { data, isLoading } = useGetAllProductsQuery();
  console.log(data, isLoading, useGetAllProductsQuery);
  if (isLoading) {
    return <div></div>;
  }

  return (
    <div>
      <h1>There is {data.length} article</h1>
      <hr />
    </div>
  );
}

function AllProducts() {
  let { data, isLoading } = useGetAllProductsQuery();

  return (
    <div>
      <Header />

      {isLoading && !data ? (
        <div>Loading...</div>
      ) : (
        data.map((product) => (
          <ProductComponents key={product.id} product={product} />
        ))
      )}
    </div>
  );
}

export default AllProducts;
