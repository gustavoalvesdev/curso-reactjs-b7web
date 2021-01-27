import React, { useEffect, useState } from 'react';
import SearchBox from './components/SearchBox';

function App() {

  const [searchText, setSearchText] = useState('');
  const [ list, setList ] = useState([]);

  useEffect(() => {

    setList([
      {
        title: 'Comprar o bolo', 
        done: false
      },
      {
        title: 'Pegar o cachorro no petshop', 
        done: true
      },
      {
        title: 'Gravar aula', 
        done: false
      }
    ]);

  }, []);

  function handleSearchInput(novoTexto) {

    setSearchText(novoTexto);

  }

  return (

    <div>
      <h1>Lista de Tarefas</h1>
      <SearchBox frasePadrao="Faça sua busca..." onChangeText={handleSearchInput} />

      <hr />

      <ul>
      {list.map( (item, index) => ( 
        <li key={index}>
        {item.done &&
          <del>{item.title}</del>
        }
        {!item.done &&
          item.title
        }
        </li> 
      ))}
      </ul>
    </div>
  );

}

export default App;