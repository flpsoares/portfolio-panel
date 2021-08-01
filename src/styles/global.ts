import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    color: var(--text-primary);
  }

  body {
    background: var(--dark-secondary);
  }
  
  button, input {
    background: 0;
    border: 0;
    cursor: pointer;
  }

  :root {
    --primary: #286380;
    --secondary: #417A95;
    --tertiary: #94BED2;
    --text-primary: #c9d1d9;
    --dark-primary: #141414;
    --dark-secondary: #262626;
  }
`
