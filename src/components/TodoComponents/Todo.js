import React from 'react';

class Todo extends React.Component {
  render() {
    const { data } = this.props;
    return <li style={data.completed ? { textDecoration: 'line-through' } : {}}>{data.task}</li>;
  }
}

export default Todo;
