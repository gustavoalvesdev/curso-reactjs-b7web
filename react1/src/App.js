import React, { useState } from 'react';
import styled from 'styled-components';
import SearchBox from './components/SearchBox';

function App() {

  const [searchText, setSearchText] = useState('');

  function handleSearchInput(novoTexto) {

    setSearchText(novoTexto);

  }

  return (

    <div>
      <h1>Lista de Tarefas</h1>
      <SearchBox frasePadrao="Faça sua busca..." onChangeText={handleSearchInput} />

      <SearchBox frasePadrao={searchText} />

      <hr />

      Texto procurado: {searchText}
      
    </div>

  );

}

export default App;