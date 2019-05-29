import React from 'react';

class TodoForm extends React.Component {
  render() {
    const {
      inputValue, onChangeInput, onAddTodo, onClearCompleted,
    } = this.props;

    return (
      <form onSubmit={onAddTodo}>
        <input value={inputValue} onChange={onChangeInput} type="text" />
        <button type="submit">Add Todo</button>
        <button onClick={onClearCompleted} type="button">
          Clear Completed
        </button>
      </form>
    );
  }
}

export default TodoForm;
