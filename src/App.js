import Button from './components/Button'
import Display from './components/Display'
import { useState } from 'react'
// import Card from '@material-ui/core/Card'
// import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import { Box } from '@material-ui/core'

function App() {
  const [number, setNumber] = useState(0)
  const [operator, setOperator] = useState(null)
  const [number2, setNumber2] = useState(0)
  const [number3, setNumber3] = useState(0)

  const handleSetNumber = (v) => {
    if (number && !number2 && number3) {
      setNumber2(Number(`${number2}${v}`))
      setNumber3(0)
    } else if (number && number2 && number3) {
      setNumber(v)
      setOperator(null)
      setNumber2(0)
      setNumber3(0)
    } else if (operator) {
      setNumber2(Number(`${number2}${v}`))
    } else {
      setNumber(Number(`${number}${v}`))
    }
  }

  const handleClear = (v) => {
    setNumber(0)
    setOperator(null)
    setNumber2(0)
    setNumber3(0)
  }
  const handleOperator = (v) => {
    if (number && number2) {
      let result
      if (operator === '-') {
        result = number - number2
      } else if (operator === '/') {
        result = number / number2
      } else if (operator === '+') {
        result = number + number2
      } else if (operator === '*') {
        result = number * number2
      }
      setNumber3(result)
      setNumber(result)
      setNumber2(0)
    }
    setOperator(v)
  }
  const handleResult = () => {
    let result
    if (operator === '-') {
      result = number - number2
    } else if (operator === '/') {
      result = number / number2
    } else if (operator === '+') {
      result = number + number2
    } else if (operator === '*') {
      result = number * number2
    }
    setNumber3(result)
  }

  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      height='100vh'
    >
      <Box
        width={300}
        border='1px solid black'
        padding={'10px'}
        borderRadius={20}
      >
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Display
              number={number}
              operator={operator}
              number2={number2}
              number3={number3}
            />
          </Grid>
          <Grid item xs={6}>
            <Button value='clear' text='clear' handleClick={handleClear} />
          </Grid>
          <Grid item xs={3}>
            <Button value='/' text='÷' handleClick={handleOperator} />
          </Grid>
          <Grid item xs={3}>
            <Button value='*' text='×' handleClick={handleOperator} />
          </Grid>

          <Grid item xs={3}>
            <Button value={7} text='7' handleClick={handleSetNumber} />
          </Grid>
          <Grid item xs={3}>
            <Button value={8} text='8' handleClick={handleSetNumber} />
          </Grid>
          <Grid item xs={3}>
            <Button value={9} text='9' handleClick={handleSetNumber} />
          </Grid>
          <Grid item xs={3}>
            <Button value='-' text='-' handleClick={handleOperator} />
          </Grid>

          <Grid item xs={3}>
            <Button value={4} text='4' handleClick={handleSetNumber} />
          </Grid>
          <Grid item xs={3}>
            <Button value={5} text='5' handleClick={handleSetNumber} />
          </Grid>
          <Grid item xs={3}>
            <Button value={6} text='6' handleClick={handleSetNumber} />
          </Grid>
          <Grid item xs={3}>
            <Button value='+' text='+' handleClick={handleOperator} />
          </Grid>

          <Grid item xs={3}>
            <Button value={1} text='1' handleClick={handleSetNumber} />
          </Grid>
          <Grid item xs={3}>
            <Button value={2} text='2' handleClick={handleSetNumber} />
          </Grid>
          <Grid item xs={3}>
            <Button value={3} text='3' handleClick={handleSetNumber} />
          </Grid>
          <Grid item xs={3}>
            <Button value='=' text='=' handleClick={handleResult} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default App
