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
    background: var(--dark-primary);
  }
  
  button, input {
    background: 0;
    border: 0;
  }
  
  button {
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

  .rec-dot {
    background-color: transparent !important;
    opacity: 50% !important;
    box-shadow: 0 0 1px 3px var(--secondary) !important;
  }
  .rec-dot_active {
    background-color: white !important;
    opacity: 100% !important;
    box-shadow: 0 0 1px 3px var(--secondary) !important;
  }
  .rec.rec-arrow {
    background: transparent !important;
  }
  .rec.rec-arrow:hover {
    background: var(--secondary) !important;
    color: var(--text-primary) !important;
  }
  .rec.rec-arrow:hover:disabled, .rec.rec-arrow:focus:disabled {
    background: transparent !important;
    color: transparent !important;
  }
`
