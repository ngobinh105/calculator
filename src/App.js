import Button from './components/Button'
import Display from './components/Display'
import { useState } from 'react'

function App() {
  const [number, setNumber] = useState(0)
  const [operator, setOperator] = useState(null)
  const [number2, setNumber2] = useState(0)
  const handleSetNumber = (v) => {
    const a = Number(`${number}` + `${v}`)
    const b = Number(`${number2}` + `${v}`)
    operator === null ? setNumber(a) : setNumber2(b)
  }
  const handleClear = (v) => {
    setNumber(0)
  }
  const handleOperator = (v) => {
    setOperator(v)
  }
  const handleResult = (v) => {
    if (operator === '-') {
      setNumber(number - number2)
    } else if (operator === '/') {
      setNumber(number / number2)
    } else if (operator === '+') {
      setNumber(number + number2)
    } else if (operator === '*') {
      setNumber(number * number2)
    }
    setOperator(null)
    setNumber2(0)
  }

  return (
    <div className='App'>
      <Display number={number} operator={operator} number2={number2} />
      <div>
        <Button value='clear' text='clear' handleClick={handleClear} />
        <Button value='/' text='/' handleClick={handleOperator} />
        <Button value='*' text='*' handleClick={handleOperator} />
      </div>
      <div>
        <Button value={7} text='7' handleClick={handleSetNumber} />
        <Button value={8} text='8' handleClick={handleSetNumber} />
        <Button value={9} text='9' handleClick={handleSetNumber} />
        <Button value='-' text='-' handleClick={handleOperator} />
      </div>
      <div>
        <Button value={4} text='4' handleClick={handleSetNumber} />
        <Button value={5} text='5' handleClick={handleSetNumber} />
        <Button value={6} text='6' handleClick={handleSetNumber} />
        <Button value='+' text='+' handleClick={handleOperator} />
      </div>
      <div>
        <Button value={1} text='1' handleClick={handleSetNumber} />
        <Button value={2} text='2' handleClick={handleSetNumber} />
        <Button value={3} text='3' handleClick={handleSetNumber} />
        <Button value='=' text='=' handleClick={handleResult} />
      </div>
    </div>
  )
}

export default App
