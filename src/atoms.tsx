import { atom, selector } from "recoil"

export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface ToDo {
  text: string
  id: number
  category: Categories | string
}

export const categoryState = atom<Categories | string>({
  key: "categoryState",
  default: Categories.TO_DO,
})

export const categoriesState = atom<string[]>({
  key: "categoriesState",
  default: JSON.parse(localStorage.getItem("categories") || "[]"),
  effects: [
    ({ onSet }) => {
      onSet((categories) => { localStorage.setItem("categories", JSON.stringify(categories)) })
    }
  ]
})

export const toDoState = atom<ToDo[]>({
  key: "todo",
  default: JSON.parse(localStorage.getItem("todos") || "[]"),
  effects: [
    ({ onSet }) => {
      onSet((toDos) => { localStorage.setItem("todos", JSON.stringify(toDos)) })
    }
  ]
})

export const toDoSelector = selector({
  key: "todoSelector",
  get: ({ get }) => {
    const category = get(categoryState)
    const todos = get(toDoState)
    return todos.filter((todo) => todo.category === category)
  }
})