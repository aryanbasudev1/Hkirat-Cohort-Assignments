import { atom , selector} from 'recoil'

export const todo = atom({
    key: 'todo', 
    default: []
})