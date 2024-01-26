import { useState, useEffect, useRef } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Search from './Search';
import List from './List';

function App() {
  const [taskValue, setTaskValue] = useState([]);

  

  const handleInputTask = (task) => {
    let li = [...taskValue];
    li.push(task);
    setTaskValue(li);
    console.log(taskValue, 'ARRAY');
  };

  return (
    <>
      <Search onInput={handleInputTask} />
      <List taskValue={taskValue} />
    </>
  );
}

export default App;
