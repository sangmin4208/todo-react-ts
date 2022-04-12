import { useRecoilValue } from "recoil"
import { categoryState, toDoSelector } from "../atoms"
import ToDoItem from "./ToDoItem"


const ToDoList = () => {
  const toDos = useRecoilValue(toDoSelector)
  return (
    <>
      {toDos?.map((toDo) => (
        <ToDoItem key={toDo.id} {...toDo} />
      ))}
    </>
  )
}
export default ToDoList