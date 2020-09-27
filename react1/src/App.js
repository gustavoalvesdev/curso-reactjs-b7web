import React from 'react';

function App() {

  let imagem = 'https://www.google.com/google.jpg';

  return <>
    <img style={{ width:600 }} src={imagem} alt="alt prop stop complaining" className="sisteminha" />
  </>;
}

export default App;