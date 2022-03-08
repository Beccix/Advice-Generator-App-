import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--Dark-Grayish-blue);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: var(--font-family);
  
  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: var(--Grayish-Blue);
    border-radius: 1.25rem;
    width: 80%;
    height: 22rem;
    padding: 1.25rem 1.25rem 3rem;
  }

  h1 {
    color: var(--Neon-Green);
    margin: 2rem auto 1.25rem auto;
    font-size: .9rem;
  }

  p {
    min-width: 17rem;
    text-align: center;
    height: 10.7rem;
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--Light-Cyan);
  }

  .MuiDivider-root {
    height: .1rem;
    width: 26%;
    position: absolute;
    bottom: 31%;
    background-color: white;
  }

  .MuiDivider-vertical {
    width: 2rem;
    height: .5rem;
    border-radius: .5rem;
    background-color: white;
  }

  button {
    box-shadow: 0px 0px 40px 1px var(--Neon-Green);
    position: absolute;
    border: var(--Neon-Green);
    border-radius: 100%;
    width: 4rem;
    height: 4rem;
    background-color: var(--Neon-Green);
    transform: translateY(19rem);
    z-index: 99;
  }

  button:hover {
    filter: brightness(85%);
  }

  img {
    max-width: 100%;
  }

  .attribution { 
    background-color: var(--Dark-Grayish-blue);
    position: absolute;
    bottom: 0;
    height: 10%;
    font-size: 11px; 
  }
  
  .attribution a { 
    color: hsl(228, 45%, 44%); 
  }

  @media only screen and (min-width: 768px) {

  div {
    width: 45%;
  }

  .MuiDivider-root {
    height: .1rem;
    width: 16%;
    position: absolute;
    bottom: 28%;
    background-color: white;
  }

  .MuiDivider-vertical {
    width: 2rem;
    height: .5rem;
    border-radius: .5rem;
    background-color: white;
  }
  
  }
`