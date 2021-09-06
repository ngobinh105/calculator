import React from 'react'
import MuiButton from '@material-ui/core/Button'

const Button = ({ value, text, handleClick, style }) => {
  let color
  if (value === 'clear') {
    color = 'secondary'
  } else if (typeof value !== 'number') {
    color = 'primary'
  } else color = 'defaut'
  return (
    <MuiButton
      style={style}
      fullWidth
      onClick={() => handleClick(value)}
      variant='contained'
      color={color}
    >
      {text}
    </MuiButton>
  )
}

export default Button
