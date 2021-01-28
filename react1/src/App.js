import React, { useEffect, useState } from 'react';
import SearchBox from './components/SearchBox';
import './App.css';

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

  function handleToggleDone(index) {
    let newList = [...list];
    newList[index].done = !newList[index].done;

    setList(newList);
  }

  return (

    <div>
      <h1 className="app-title">Lista de Tarefas</h1>
      <SearchBox 
        frasePadrao="Adicione uma tarefa e pressione Enter" 
        onEnter={addAction}  
      />

      <p className="obs"><em>Clique no item para marcar com feito ou não feito</em></p>

      <hr />
      <div className="list-wrapper">
        <ul className="task-list">
        {list.map( (item, index) => ( 
          <li key={index} onClick={() => handleToggleDone(index)}>
          {item.done &&
            <del className="done">{item.title}</del>
          }
          {!item.done &&
            <span className="todo">{item.title}</span>
          }
          </li> 
        ))}
        </ul>
      </div>
    </div>
  );

}

export default App;