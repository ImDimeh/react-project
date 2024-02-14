import React from "react";
import styled from "styled-components";


function App() {
  return (
    <AppContainer>
      <AppHeader>
        <AppTitle>Rendu React - Mehdi Bellam</AppTitle>
      </AppHeader>
    </AppContainer>
  );
}

export default App;


const AppContainer = styled.div`
  text-align: center;
  align-items: center;
  justify-content: center;
  

`;

const AppHeader = styled.header`
  background-color: #282c34;
  padding: 20px;
  color: white;
  height: 100vh;
`;

const AppTitle = styled.h1`
  font-size: 5vw;
  margin: 0;
  width: 100%;
  color: #3498db; /* Bleu moderne */
`;