
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilStateLoadable } from 'recoil';
import { todosAtomFamily, todosAtomSelectorFamily } from './store/atoms';

function App() {
  return <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2} />
    <Todo id={3} />
    <Todo id={4} />

  </RecoilRoot>
}

function Todo({id}) {
   const [todo, setTodo] = useRecoilStateLoadable(todosAtomSelectorFamily(id));
  if (todo.state === 'loading') {
    return <div>
      Loading...
    </div>
  }
  return (
    <>
      {todo.contents.title}
      {todo.contents.description}
      <br />
    </>
  )
}

export default App