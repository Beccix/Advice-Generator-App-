import { useEffect, useState } from "react";
import { Container } from "./style";
import dice from '../../assets/icon-dice.svg'
import Divider from '@mui/material/Divider';

export function Board() {

  const [advice, setAdvice] = useState<any>('')

  async function fetchAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()
    setAdvice(data.slip)
  }

  useEffect(() => {
    fetchAdvice()
  }, [])

  console.log(advice.advice)

  return (
    <Container>
      <div>
        <h1>ADVICE # {advice.id}</h1>
        <p>{advice.advice}</p>

        <Divider
          orientation='horizontal'
          style={{ transform: 'translateX(-80%)' }}
        />
        <Divider
          orientation='vertical'
          style={{ transform: 'rotate(90deg) translateY(-.8rem)' }}
        />
        <Divider
          orientation='vertical'
          style={{ transform: 'rotate(90deg) translateY(.8rem)' }}
        />
        <Divider
          orientation='horizontal'
          style={{ transform: 'translateX(80%)' }}
        />


        <button onClick={fetchAdvice} >
          <img src={dice} alt="" />
        </button>
      </div>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Your Name Here</a>.
      </div>
    </Container>
  )
}
