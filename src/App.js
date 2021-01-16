import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux"
import { todoActions } from './slice';
import { store } from './store';

function App() {

const addTodo = bindActionCreators(todoActions, useDispatch()).addTodo

const todoList = useSelector(state => state.todo.todoList)

  return (
    <div className="App">
      {
        todoList.map(todo => 
          <ul>{todo.title}</ul>
          )
      }
      <button onClick={() => addTodo({
        title: "study redux",
        deadline: "1月31日",
        isCompleted: false
      })}>add</button>
    </div>
  );
}

export default App;
