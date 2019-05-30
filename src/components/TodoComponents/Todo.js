import React from 'react';

class Todo extends React.Component {
  render() {
    const { data, crossOut } = this.props;

    return (
      <li
        onClick={() => crossOut(data)}
        style={data.completed ? { textDecoration: 'line-through' } : {}}
      >
        {data.task}
      </li>
    );
  }
}

export default Todo;
