import React from 'react';

function Avatar(props) {
  return (
    <div>
      <img src={props.user.url} alt={props.user.name} />
      <br />
      <span>{props.user.name}</span>
    </div>
  ); 
}

function App() {

  const user = {
    url: 'https://www.google.com/google.jpg',
    name: 'Gustavo Alves'
  };

  return <>
    <Avatar user={user} />
  </>;
}

export default App;