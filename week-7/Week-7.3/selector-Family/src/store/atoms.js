import { atomFamily , selectorFamily } from "recoil";
import { TODOS } from "../todos";
import axios from 'axios'
//atomFamily
export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: id=> {
    return TODOS.find(x => x.id === id)
  },
});

/*selectorFamily*/
/*this will fetch todos from a backend , and then create an atom for each of the following ready to used and 
manipulated accordingly */

export const todosAtomSelectorFamily = atomFamily({
  key: 'todosAtomSelectorFamily',
  default: selectorFamily({
    key : "todosSelectorFamily",
    get: (id) => async () => {
      const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
      return res.data.todo
    }
      
  })
})
