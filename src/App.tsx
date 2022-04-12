import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"
import ToDo from "./components/Todo"


const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box;
  }
  body {
  font-weight: 300;
  font-family: 'Source Sans Pro', sans-serif;
  background-color:${(props) => props.theme.bgColor};
  color:${(props) => props.theme.textColor};
  line-height: 1.2;
}
a {
  text-decoration:none;
  color:inherit;
}
`

function App() {
  return (
    <>
      <GlobalStyle />
      <ToDo />
    </>
  )
}

export default App
