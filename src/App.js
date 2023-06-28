import './index.scss'
// import React from 'react'
import { useState } from 'react'

function App() {
  // let count = 0
  const [count, setCount] = useState(0)
  // const [count, setCount] = React.useState(0)

  const onClickPlus = () => {
    // count++
    setCount(count + 1)
  }

  const onClickMoins = () => {  
    setCount(count - 1)
  }

  return (
    <div className="App">
      <div>
        <h2>Mon comptoir</h2>
        <h1>{count}</h1>
        <button onClick={onClickMoins} className="minus">- Moins</button>
        <button onClick={onClickPlus} className="plus">Plus +</button>
      </div>
    </div>
  );
}

export default App;


// состояния в react // return - простая разметка jsx
// пока обычный js
//let count = 0 count++ console.log(count) - понимает только js для react нужно исп спкц hook useState

//const onClickPlus = () => {count++} - прикручиваем на кнопку
// код для React:// [count - var, setCount - f кот меняет var] 
