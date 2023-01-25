const Score = (props) => {
  console.log(props);
  return (
    <>
      <h2>Test Date: {props.score.date}</h2>
      <h3>Score: {props.score.score}</h3>
    </>
  )
}

export default Score

