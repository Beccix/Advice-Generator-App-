import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--Dark-Grayish-blue);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--font-family);
  
  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: var(--Grayish-Blue);
    border-radius: .5rem;
    width: 90%;
    height: 19.6rem;
    padding: 0 1.7rem 0 1.7rem;
  }

  h1 {
    color: var(--Neon-Green);
    margin: 2rem auto 2rem auto;
    font-size: .7rem;
  }

  p {
    text-align: center;
    height: 10.7rem;
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--Light-Cyan);
  }

  span {
    display: flex;
    justify-content: space-between;
    padding-top: 2rem;
    width: 100%;
    height: 100%;
  }

  .horizontal:first-of-type {
    opacity: .2;
    height: .1rem;
    width: 40%;
    background-color: var(--Light-Cyan);
  }

  .horizontal:last-of-type {
    opacity: .2;
    height: .1rem;
    width: 40%;
    background-color: var(--Light-Cyan);
  }

  .vertical {
    transform: translateY(-50%);
    background-color: var(--Light-Cyan);
    border-radius: .5rem;
    width: .5rem;
    height: 1.3rem;
  }

  button {
    position: absolute;
    border: var(--Neon-Green);
    border-radius: 100%;
    width: 4rem;
    height: 4rem;
    background-color: var(--Neon-Green);
    transform: translateY(17.7rem);
  }

  button:hover {
    filter: brightness(85%);
  }
`