import { RecoilRoot, useRecoilState, useSetRecoilState } from "recoil";
import "./App.css";
import { todo } from "./store/atoms/todo";
import SingleTodo from "./components/SingleTodo";
import { useState } from "react";
function App() {
  return (
    <div>
      <RecoilRoot>
        <AddTodo> </AddTodo>
      </RecoilRoot>
    </div>
  );
}

function AddTodo() {
  const [todos, setTodos] = useRecoilState(todo);
  const [title , setTitle] = useState()
  const [description, setDescription] = useState()
  
  function addTodo() {
    setTodos([...todos, {
      title,
      description 
    }])
  }
  return (
    <div>
      <div>
        <input type="text" placeholder="title" onChange={(e) => setTitle(e.target.value)} /> <br />
        <input type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)} /> <br />
        <button onClick={addTodo}>Add to the list </button>
        {todos.map((item , index) => { 
          return <SingleTodo key={ index } title={item.title} description = {item.description}></SingleTodo>
        })}
      </div>
    </div>
  );
}
export default App;
