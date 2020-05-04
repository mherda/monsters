import React, { useState, useEffect } from 'react';
import './App.css';


function AppFn() {
  const [monsters, setMonster] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setMonster(users));
  },[]);

  return(
    <div className="App funct">
        {
          monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)
        }
      </div>
  )
}

export default AppFn;
