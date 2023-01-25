import Score from "./Score"

const Student = (props) => {
  console.log(props);
  return (
    <>
      <h2>These are the students!</h2>
      <Score />
    </>
  )
}

export default Student