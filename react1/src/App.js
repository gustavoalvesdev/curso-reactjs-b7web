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
  font-size: 19px;
  padding: 15px;
  border: 3px dashed #f00;
  color: #f00;
  background-color: #fff;
  margin: 5px;
  border-radius: 5px;
`;

const BotaoPequeno = styled(Botao) `
  padding: 5px 10px;
  font-size: 16px;
`;

function App() {

  return (
    <Site>
      <Title>Título bem Legal</Title>
      <Botao>Clique Aqui</Botao>
      <BotaoPequeno>Clique Aqui</BotaoPequeno>
    </Site>
  );
}

export default App;