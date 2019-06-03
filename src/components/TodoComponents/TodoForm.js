import React from 'react';

const TodoForm = ({
  inputValue, onChangeInput, onAddTodo, onClearCompleted,
}) => (
  <form onSubmit={onAddTodo}>
    <input value={inputValue} onChange={onChangeInput} type="text" />
    <button type="submit">Add Task</button>
    <button onClick={onClearCompleted} type="button">
        Clear Completed
    </button>
  </form>
);

export default TodoForm;
