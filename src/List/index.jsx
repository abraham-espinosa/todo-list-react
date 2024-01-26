import { useState } from 'react';
import ItemList from './ItemList';

const List = ({ taskValue }) => {
  console.log(taskValue, 'LIST');

  const mappin = () => {
    if (taskValue.length > 0) {
      taskValue.length > 9
        ? console.log('Llegaste a 10 tareas')
        : console.log('Agrega más tareas');
      return taskValue.map((task) => <ItemList key={task} taskValue={task} />);
    } else {
      <p>No tasks</p>;
    }
  };

  return <ol>{mappin()}</ol>;
};

export default List;
