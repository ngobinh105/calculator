import React from 'react'

const Button = ({ value, text, handleClick }) => {
  return <button onClick={() => handleClick(value)}>{text}</button>
}

export default Button
