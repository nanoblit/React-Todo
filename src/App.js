import React, { useState, useEffect } from 'react';
import SearchInput from './components/TodoComponents/SearchInput';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const App = () => {
  const [taskList, setTaskList] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const taskListFromStorage = window.localStorage.getItem('taskList');
    if (taskListFromStorage) {
      setTaskList(JSON.parse(taskListFromStorage));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('taskList', JSON.stringify(taskList));
  }, [taskList]);

  const crossOut = data => {
    const newData = data;
    newData.completed = !newData.completed;

    setTaskList(
      taskList.map(task => {
        if (task.id === newData.id) {
          return newData;
        }
        return task;
      }),
    );
  };

  const onChangeInput = e => {
    setNewTodo(e.target.value);
  };

  const onChangeSearch = e => {
    setSearchText(e.target.value);
    setTaskList(
      taskList.map(task => {
        const newTask = task;
        newTask.displayed = task.task.indexOf(e.target.value) > -1;
        return newTask;
      }),
    );
  };

  const onAddTodo = e => {
    e.preventDefault();

    if (newTodo === '') return;

    const todo = {
      task: newTodo,
      id: Date.now(),
      completed: false,
      displayed: true,
    };

    todo.displayed = todo.task.indexOf(searchText) > -1;

    setTaskList([...taskList, todo]);
    setNewTodo('');
  };

  const onClearCompleted = () => {
    setTaskList(taskList.filter(({ completed }) => !completed));
  };

  return (
    <div className="app">
      <SearchInput inputValue={searchText} onChangeInput={onChangeSearch} />
      <TodoList taskList={taskList} crossOut={crossOut} />
      <TodoForm
        inputValue={newTodo}
        onChangeInput={onChangeInput}
        onAddTodo={onAddTodo}
        onClearCompleted={onClearCompleted}
      />
    </div>
  );
};

export default App;

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       taskList: [],
//       newTodo: '',
//     };
//   }

//   componentDidMount() {
//     const taskListFromStorage = window.localStorage.getItem('taskList');
//     if (taskListFromStorage) {
//       this.setState({ taskList: JSON.parse(taskListFromStorage) });
//     }
//   }

//   componentDidUpdate() {
//     const { taskList } = this.state;
//     window.localStorage.setItem('taskList', JSON.stringify(taskList));
//   }

//   crossOut = data => {
//     const { taskList } = this.state;
//     const newData = data;
//     newData.completed = !newData.completed;

//     this.setState({
//       taskList: taskList.map(task => {
//         if (task.id === newData.id) {
//           return newData;
//         }
//         return task;
//       }),
//     });
//   };

//   onChangeInput = e => {
//     this.setState({
//       newTodo: e.target.value,
//     });
//   };

//   onAddTodo = e => {
//     e.preventDefault();
//     const { newTodo } = this.state;

//     if (newTodo === '') return;

//     const todo = {
//       task: newTodo,
//       id: Date.now(),
//       completed: false,
//     };

//     this.setState(prevState => ({
//       taskList: [...prevState.taskList, todo],
//       newTodo: '',
//     }));
//   };

//   onClearCompleted = () => {
//     this.setState(prevState => ({
//       taskList: prevState.taskList.filter(({ completed }) => !completed),
//     }));
//   };

//   render() {
//     const { taskList, newTodo } = this.state;

//     return (
//       <div>
//         <TodoList taskList={taskList} crossOut={this.crossOut} />
//         <TodoForm
//           inputValue={newTodo}
//           onChangeInput={this.onChangeInput}
//           onAddTodo={this.onAddTodo}
//           onClearCompleted={this.onClearCompleted}
//         />
//       </div>
//     );
//   }
// }
