import { useState } from 'react';
const Search = ({ onInput }) => {
  const [taskValue, setTaskValue] = useState('');

  const handleInputChange = (e) => {
    setTaskValue(e.target.value);
  };
  const handleInputKeyDown = (e) => {
    if (e.key == 'Enter') {
      onInput(taskValue);
    }
  };
  const handleInputSubmit = () => {
    onInput(taskValue);
  };

  return (
    <div>
      <p>Todo List</p>
      <input
        placeholder="Enter your new task"
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
      />
      <button onClick={handleInputSubmit}>Add task</button>
    </div>
  );
};

export default Search;
