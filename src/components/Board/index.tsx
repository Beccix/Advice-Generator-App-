import { useEffect, useState } from "react"
import { Container } from "./style";
import dice from '../../assets/icon-dice.svg'

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
        <span><hr className="horizontal" /><hr className="vertical" /><span className="space"></span><hr className="vertical" /><hr className="horizontal" /></span>
        <button onClick={fetchAdvice} >
          <img src={dice} alt="" />
        </button>
      </div>
    </Container>
  )
}
