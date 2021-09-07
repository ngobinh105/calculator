import { Box, Typography } from '@material-ui/core'

const Display = ({ number, number2, number3, operator }) => {
  let result
  let operatorSign
  if (operator === '/') {
    operatorSign = '÷'
  } else if (operator === '*') {
    operatorSign = '×'
  } else if (operator === '+') {
    operatorSign = '+'
  } else if (operator === '-') {
    operatorSign = '-'
  }
  if (number3) {
    result = number3
  } else if (number2) {
    result = number2
  } else {
    result = number
  }
  let subtitle
  if (number && operator && number3) {
    subtitle = `${number} ${operatorSign} ${number2 === 0 ? '' : number2} ${
      number2 === 0 ? '' : '='
    }`
  } else if (number && operator) {
    subtitle = `${number} ${operatorSign}`
  }
  return (
    <Box height={65} borderBottom='1px solid black'>
      <Typography style={{ height: 24 }} align='right' variant='body1'>
        {subtitle}
      </Typography>

      <Typography align='right' variant='h4'>
        {result}
      </Typography>
    </Box>
  )
}

export default Display
