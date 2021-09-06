const Display = ({ number, number2, operator }) => {
  const result = operator === null ? number : number2
  return <div>{result}</div>
}

export default Display
