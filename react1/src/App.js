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

// background-color: ${props => props.backgroundColor || 'blue'};

const Botao = styled.button `
  font-size: 20px;
  color: ${props => props.active ? 'white' : 'black'};
  background-color: ${props => props.active ? 'blue' : 'gray'};
  border: 0;
  cursor: pointer;
`;

function App() {

  return (
    <Site>
      <Title>Título bem Legal</Title>
      <Botao active={true} backgroundColor="black">Clique Aqui</Botao>
      <Botao active={false} backgroundColor="red">Clique Aqui</Botao>
    </Site>
  );
}

export default App;