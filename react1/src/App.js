import React, { useState } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width:400px;
  height:30px;
  font-size:16px;
  padding:10px;
  border: 1px solid #000;
`;

function App() {

  const [ email, setEmail ] = useState('');
  const [ isLogged, setIsLogged ] = useState(true);

  const handleEmailInput = e => {
    setEmail(e.target.value);
  };

  return (

    <>
      <Input placeholder="Digite seu e-mail" type="email" value={email} onChange={handleEmailInput} />

      {/*isLogged && 
        <button>sair</button>
      */}

      {/*isLogged == false && 
        <button>logar</button>
      */}

      {isLogged ? <button>sair</button> : <button>fazer login</button>}

       {/* algo && <Componente /> */}
        
      {/* email.length > 0 && 
        <p>{email.length} caractere{email.length !== 1 ? 's' : ''}</p> */
      }
      
      {email.length > 0 && 
        <>
          <p>{email.length} caractere{email.length !== 1 ? 's' : ''}</p>
          <p>aviso alguma coisa</p>
        </>
      }
      
    </>

  );

}

export default App;