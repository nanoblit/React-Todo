import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: [],
      newTodo: '',
    };
  }

  componentDidMount() {
    const taskListFromStorage = window.localStorage.getItem('taskList');
    if (taskListFromStorage) {
      this.setState({ taskList: JSON.parse(taskListFromStorage) });
    }
  }

  componentDidUpdate() {
    const { taskList } = this.state;
    window.localStorage.setItem('taskList', JSON.stringify(taskList));
  }

  crossOut = data => {
    const { taskList } = this.state;
    const newData = data;
    newData.completed = !newData.completed;

    this.setState({
      taskList: taskList.map(task => {
        if (task.id === newData.id) {
          return newData;
        }
        return task;
      }),
    });
  };

  onChangeInput = e => {
    this.setState({
      newTodo: e.target.value,
    });
  };

  onAddTodo = e => {
    e.preventDefault();
    const { newTodo } = this.state;

    if (newTodo === '') return;

    const todo = {
      task: newTodo,
      id: Date.now(),
      completed: false,
    };

    this.setState(prevState => ({
      taskList: [...prevState.taskList, todo],
      newTodo: '',
    }));
  };

  onClearCompleted = () => {
    this.setState(prevState => ({
      taskList: prevState.taskList.filter(({ completed }) => !completed),
    }));
  };

  render() {
    const { taskList, newTodo } = this.state;

    return (
      <div>
        <TodoList taskList={taskList} crossOut={this.crossOut} />
        <TodoForm
          inputValue={newTodo}
          onChangeInput={this.onChangeInput}
          onAddTodo={this.onAddTodo}
          onClearCompleted={this.onClearCompleted}
        />
      </div>
    );
  }
}

export default App;
