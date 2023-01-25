import Score from "./Score";

const Student = (props) => {
  console.log(props)
  return (
    <>
      <h2>This is a Student component!</h2>   
      <h2>{props.students.name}</h2>
      <h3>{props.students.bio}</h3>
      <Score />
    </>
  )
}

export default Student;