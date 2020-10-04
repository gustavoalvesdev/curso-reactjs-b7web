import React from 'react';
import styled from 'styled-components';

const Site = styled.div `
  width: 400px;
  height: 400px;
  background-color: yellow;
  margin: 0 auto;
`;

const Title = styled.h1 `
  color: #f00;
  font-size: 18px;
`;

const Botao = styled.button `
  font-size: 20px;
  color: white;
  background-color: black;
  border: 0;
  cursor: pointer;
`;

function App() {

  return (
    <Site>
      <Title>Título bem Legal</Title>
      <Botao>Clique Aqui</Botao>
    </Site>
  );
}

export default App;