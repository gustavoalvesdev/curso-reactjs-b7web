import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function App () {

  const [ contagem, setContagem ] = useState(0);

  const aumentarAction = () => {
    setContagem(contagem + 1);
  };

  useEffect(() => { 
    
    if (contagem == 0) {
      document.title = 'Começou a brincadeira!';
    } else {
      document.title = `Contagem: ${contagem}`; 
    }
  }, [contagem]);

  return (

    <>
      <h1>Contagem: {contagem}</h1>
      <button onClick={aumentarAction}>Aumentar Número</button>
    </>

  );

}

export default App;