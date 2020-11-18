import React, { useState } from 'react';

function App() {

  const [ contagem, setContagem ] = useState( 0 )

  const botaoAction = () => {
    setContagem( contagem + 1 );
  };

  return (
    <>
      <div>{contagem} Vezes</div>
      <button onClick={botaoAction}>Clique para aumentar</button>
    </>
  );
}

export default App;