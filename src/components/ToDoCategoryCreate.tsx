import { useForm } from "react-hook-form"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import styled from "styled-components"
import { categoriesState, categoryState, toDoState } from "../atoms"


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
  category: string
}

function TodoCategoryCreate() {
  const [categories, setCategories] = useRecoilState(categoriesState)
  const { register, handleSubmit, setValue, setError, formState: { errors } } = useForm<Form>()
  const handleValid = ({ category }: Form) => {
    if (categories.includes(category)) {
      setError("category", {
        type: "manual",
        message: "Category already exists",
      });
      return;
    }
    setCategories((oldCategories) => [
      ...oldCategories,
      category,
    ]);
    setValue("category", "");
  }
  return (
    <>
      <form onSubmit={handleSubmit(handleValid)}>
        <Input  {...register("category", {
          required: "Please write a category",
        })}
          placeholder="Category"
        />
        <Button>Add</Button>
      </form>
      {errors && <span>{errors.category?.message}</span>}
    </>
  )
}

export default TodoCategoryCreate