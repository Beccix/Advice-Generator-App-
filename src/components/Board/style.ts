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
    width: 80%;
    height: 19.6rem;
    padding: 0 1.7rem 0 1.7rem;
  }

  h1 {
    color: var(--Neon-Green);
    margin: 2rem auto 2rem auto;
    font-size: .7rem;
  }

  p {
    min-width: 17rem;
    text-align: center;
    height: 10.7rem;
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--Light-Cyan);
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 2rem;
    width: 100%;
    height: 100%;
  }

  .horizontal:first-of-type {
    transform:translateX(-1rem);
    opacity: .2;
    height: .1rem;
    width: 40%;
    background-color: var(--Light-Cyan);
  }

  .horizontal:last-of-type {
    transform:translateX(1rem);
    opacity: .2;
    height: .1rem;
    width: 40%;
    background-color: var(--Light-Cyan);
  }

  .vertical {
    background-color: var(--Light-Cyan);
    border-radius: .5rem;
    width: .5rem;
    height: 1.3rem;
  }

  .space {
      width: 6%;
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

  @media only screen and (min-width: 650px) {
    h1 {
      font-size: 1rem;
    }

    p {
      max-width: 20rem;
    }

    div {
      width: 45vw;
    }

    span {
      justify-content: center;
      transform: translateY(-1.5rem);
    }

    .space {
      width: 3%;
    }
  }

  @media only screen and (max-width: 650px) {
    div {
      width: 24rem;
    }

    span {
      padding-top: 0rem;
    }

    .space {
      width: .5rem;
    }

  }
`