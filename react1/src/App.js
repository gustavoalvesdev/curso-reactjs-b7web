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


  function addAction(newItem) {
    let newList = [...list, {title: newItem, done: false}];

    setList(newList);
  }

  return (

    <div>
      <h1>Lista de Tarefas</h1>
      <SearchBox 
        frasePadrao="Adicione um item" 
        onEnter={addAction}  
      />

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