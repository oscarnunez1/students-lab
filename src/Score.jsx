const Score = (props) => {
  console.log(props);
  return (
    <>
      <h2>This is a score component!</h2>
      {props.scores.score}
      {props.scores.date}
    </>
  )
}

export default Score

