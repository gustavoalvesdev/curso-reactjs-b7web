import React from 'react';

function Avatar(props) {
  return (
    <div style={{ backgroundColor: '#FF0000', padding: 20, width: 150 }}>
      <img style={{ width:50, height: 50 }} src={props.user.url} alt={props.user.name} />
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