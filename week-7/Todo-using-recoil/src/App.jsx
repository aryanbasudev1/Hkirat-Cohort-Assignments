import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import "./App.css";
import { todo, titleState, descriptionState, filterState, filterList } from "./store/atoms/todo";
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
  const [title , setTitle] = useRecoilState(titleState)
  const [description, setDescription] = useRecoilState(descriptionState)
  const [filter , setFilter] = useRecoilState(filterState)
  const filteredList = useRecoilValue(filterList)
  
  function addTodo() {
    setTodos([...todos, {
      title,
      description 
    }])
  }

  return (
    <div>
      <div>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} /><br />
        <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} /><br />
        <input type="text" placeholder="Filter list" value={filter} onChange={(e) => setFilter(e.target.value)} /><br />
        <button onClick={addTodo}>Add to the list</button>
        
        <div>
          <h3>Todo List</h3>
          {todos.map((item, index) => (
            <SingleTodo key={index} title={item.title} description={item.description} />
          ))}
        </div>

        <div>
          <h3>Filtered List</h3>
          {filteredList.map((item, index) => (
            <SingleTodo key={index} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
