import { atom , selector, useRecoilValue} from 'recoil'

export const todo = atom({
    key: 'todo', 
    default: []
})

export const titleState = atom({
    key: 'titleState',
    default: ''
})

export const descriptionState = atom({
    key: 'descriptionState',
    default: ''
})

export const filterState = atom({
    key: 'filterState',
    default: ''
})

export const filterList = selector({
    key: 'filterList',
    get: ({ get }) => {
        /*2 dependancies it depends upon , either up these changes it runs this selector  */
        const todos = get(todo)
        const filter = get(filterState)

        return todos.filter((item) => item.title.includes(filter) || item.description.includes(filter))

    }
})