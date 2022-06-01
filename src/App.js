import './App.css';
import { useState } from 'react';
import AddTodo from './components/AddTodo';
import Todocount from './components/Todocount';
import Todolist from './components/Todolist';

function App() {
  let [todolist,setTodoList]=useState([])

  return (
    <div className="row" >
      <div className="col-sm-4">
        <AddTodo setTodoList={setTodoList} todolist={todolist}/>
      </div>
      <div className="col-sm-4">
        <Todolist todolist={todolist}/>
      </div>
      <div className="col-sm-4">
        <Todocount todolist={todolist}/>
      </div>
    </div>
  );
}

export default App;
