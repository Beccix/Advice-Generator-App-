import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle` 

:root{
    --font-size: 1.75rem;
    --font-family: 'Poppins', sans-serif;
    --Grayish-Blue: hsl(217, 19%, 38%);  
    --Dark-Grayish-blue: hsl(217, 19%, 24%);
    --Dark-Blue: hsl(218, 23%, 16%);
    --Light-Cyan: hsl(193, 38%, 86%);
    --Neon-Green: hsl(150, 100%, 66%);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    height: 100%;
    @media (max-width: 1080) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%
    }
  }

  body {
    background: purple;
    -webkit-font-smoothing: antialiased;
    height: 100%;
  }
`