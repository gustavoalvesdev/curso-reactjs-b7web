import React, { useState } from 'react';
import styled from 'styled-components';
import SearchBox from './components/SearchBox';

function App() {

  return (

    <div>
      <h1>Lista de Tarefas</h1>
      <SearchBox frasePadrao="Faça sua busca..." />

      <SearchBox frasePadrao="Digite seu nome..." />

      <SearchBox />
    </div>

  );

}

export default App;