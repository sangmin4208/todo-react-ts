import { useForm } from "react-hook-form"
import { useRecoilValue, useSetRecoilState } from "recoil"
import styled from "styled-components"
import { categoryState, toDoState } from "../atoms"


const Input = styled.input`
  border: none;
  background-color: #EEEEEE;
  color: #4b4b4b;
  margin: 0.3rem;
  padding: 0.4rem 0.8rem;
  border-radius: 3px;
`
const Button = styled.button`
  border: none;
  background-color: transparent;
  color:#f2f2f2;
  cursor: pointer;
  margin: 0.3rem;
  padding: 0.4rem 0.8rem;
  border: 2px solid #CDBE78;
  border-radius: 3px;
  &:hover, &.active{
    background-color: #CDBE78;
  }
`

interface Form {
  toDo: string
}

function TodoCreate() {
  const setToDos = useSetRecoilState(toDoState)
  const category = useRecoilValue(categoryState)
  const { register, handleSubmit, setValue } = useForm<Form>()
  const handleValid = ({ toDo }: Form) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  }
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <Input  {...register("toDo", {
        required: "Please write a To Do",
      })}
        placeholder={category}
      />
      <Button>Add</Button>
    </form>
  )
}

export default TodoCreate