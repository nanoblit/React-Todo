import React from 'react';
import Todo from './Todo';

const TodoList = ({ taskList, crossOut }) => (
  <ul>
    {taskList.map(task => (
      <Todo key={task.id} data={task} crossOut={crossOut} />
    ))}
  </ul>
);

export default TodoList;
