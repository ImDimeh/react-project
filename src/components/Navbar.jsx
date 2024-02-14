import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  background-color: #282c34;
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SiteName = styled.h1`
  margin: 0;
`;

const CartContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CartIcon = styled.i`
  font-size: 24px;
  margin-right: 10px;
`;

const CartCount = styled.span`
  font-size: 18px;
`;

const Navbar = () => {
  // Supposons que vous ayez un état ou une propriété pour le nombre de produits dans le panier
  const cartItemCount = 0;

  return (
    <HeaderContainer>
      <SiteName>site mehdi bellam </SiteName>
      <CartContainer>
        <CartIcon className="fas fa-shopping-cart"></CartIcon>
        <CartCount>{cartItemCount}</CartCount>
      </CartContainer>
    </HeaderContainer>
  );
};

export default Navbar;


