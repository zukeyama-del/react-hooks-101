import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  const countUp = () =>{
    setCount(count + 1)
  }
  const countDown = () => {
    setCount(count - 1)
  }

  const countUp2 = () =>{
    setCount(previousCount => previousCount + 1)
  }
  const countDown2 = () => {
    setCount(previousCount => previousCount - 1)
  }
  
  const reset = () => setCount(0)

  const twoTimes = () => setCount(previousCount => previousCount * 2)

  const threeDivide = () => {
    if(count % 3 === 0){
      setCount(count / 3)
    }
  }

  return (
    <>
      <div>count: {count}</div>
      <br/>
      <button onClick={countUp}>カウントアップ</button>
      <br/>
      <button onClick={countDown}>カウントダウン</button>
      <br/>
      <button onClick={countUp2}>カウントアップ2</button>
      <br/>
      <button onClick={countDown2}>カウントダウン2</button>
      <button onClick={reset}>リセット</button>
      <button onClick={twoTimes}>×2</button>
      <button onClick={threeDivide}>3の倍数の時だけ3で割る</button>
    </>
  )
}

export default App
