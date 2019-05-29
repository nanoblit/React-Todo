import React from 'react';

const Todo = ({ data, crossOut }) => (
  <li
    onClick={() => crossOut(data)}
    style={data.completed ? { textDecoration: 'line-through' } : {}}
  >
    {data.task}
  </li>
);

export default Todo;
