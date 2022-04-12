import styled from "styled-components"
import TodoCategoryCreate from "./ToDoCategoryCreate"
import ToDoCategoryList from "./ToDoCategoryList"
import ToDoCreate from "./ToDoCreate"
import ToDoList from "./ToDoList"

const ToDoWrapper = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  padding: 0.5rem;
`
const ToDo = () => {
  return (
    <ToDoWrapper>
      <TodoCategoryCreate />
      <ToDoCategoryList />
      <ToDoCreate />
      <ToDoList />
    </ToDoWrapper>
  )
}
export default ToDo