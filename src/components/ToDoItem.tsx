import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { Categories, categoriesState, ToDo, toDoState } from "../atoms";

const ToDoItemWrapper = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap:5px;
  padding: 1rem 2rem;
  border: 1px solid #F0A500;
  border-radius: 5px;
  &:last-child {
  }
  background-color: #383838;
`

const ToDoText = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: #F2F2F2;
`

const Button = styled.button`
  border: none;
  background-color: #CDBE78;
  color: #F2F2F2;
  cursor: pointer;
  margin: 0.3rem;
  padding: 0.4rem 0.8rem;
  border-radius: 3px;
  &:hover, &.active{
    background-color: #B8A54A;
  }
  &.danger {
    background-color: #FF0000;
  }
`
const Row = styled.div`
  width:100%;
  display:flex;
  align-items: center;
  justify-content: space-between;
`

const ToDoItem = ({ text, category: currentCategory, id }: ToDo) => {
  const setToDos = useSetRecoilState(toDoState);
  const categories = useRecoilValue(categoriesState)
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  const handleDelete = () => {
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      return [
        ...oldToDos.slice(0, targetIndex),
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  }
  return (
    <ToDoItemWrapper>
      <Row>
        <ToDoText>{text}</ToDoText>
        <Button className="danger" onClick={handleDelete}>Delete</Button>
      </Row>

      <div>
        {currentCategory !== Categories.DOING && (
          <Button name={Categories.DOING} onClick={onClick}>
            Doing
          </Button>
        )}
        {currentCategory !== Categories.TO_DO && (
          <Button name={Categories.TO_DO} onClick={onClick}>
            To Do
          </Button>
        )}
        {currentCategory !== Categories.DONE && (
          <Button name={Categories.DONE} onClick={onClick}>
            Done
          </Button>
        )}
        {
          categories.map((category) => {
            if (category !== currentCategory) {
              return <Button key={category} name={category} onClick={onClick}>
                {category}
              </Button>
            }
          })
        }
      </div>

    </ToDoItemWrapper>
  )
}
export default ToDoItem