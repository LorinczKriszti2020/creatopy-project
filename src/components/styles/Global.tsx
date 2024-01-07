import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');

*{
  box-sizing: border-box;
  font-family: Quicksand;
}

body{
  font-size: 1.15em;
  margin: 0;
  padding: 0;
}

p{
  opacity: 0.6;
  margin: 0;
}

img{
  max-width: 100%;
}

h2{
  margin: 0;
  padding: 0;
}
`