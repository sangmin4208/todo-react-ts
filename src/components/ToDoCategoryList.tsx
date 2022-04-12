import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { Categories, categoriesState, categoryState } from "../atoms";

const Tab = styled.button`
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
`

const Tabs = styled.div`
  display: flex;
  gap: 5px;
  padding: 0.5rem;
  margin-bottom: 20px;
  border-bottom: 1px solid #F2F2F2;
`

const ToDoCategoryList = () => {
  const [currentCategory, setCategory] = useRecoilState(categoryState);
  const categories = useRecoilValue(categoriesState)
  const handleClick = (category: Categories | string) => {
    setCategory(category);
  };
  return (
    <Tabs>
      <Tab className={currentCategory === Categories.TO_DO ? 'active' : ''} onClick={() => { handleClick(Categories.TO_DO) }}>To Do</Tab>
      <Tab className={currentCategory === Categories.DOING ? 'active' : ''} onClick={() => { handleClick(Categories.DOING) }}>Doing</Tab>
      <Tab className={currentCategory === Categories.DONE ? 'active' : ''} onClick={() => { handleClick(Categories.DONE) }}>Done</Tab>
      {categories.map((category) => (<Tab className={currentCategory === category ? 'active' : ''} key={category} onClick={() => { handleClick(category) }}>{category}</Tab>))}
    </Tabs>
  )
}

export default ToDoCategoryList