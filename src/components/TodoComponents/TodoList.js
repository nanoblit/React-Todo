import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  render() {
    const { taskList, crossOut } = this.props;
    return (
      <ul>
        {taskList.map(task => (
          <Todo key={task.id} data={task} crossOut={crossOut} />
        ))}
      </ul>
    );
  }
}

export default TodoList;
