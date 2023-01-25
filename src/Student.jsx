import Score from "./Score";

const Student = (props) => {
  console.log(props)
  return (
    <>
      <div>
        <h2>
          {props.student.name}
        </h2>
      </div>
      <div>
        <h3>
          {props.student.bio}
        </h3>
      </div>
    </>
  )
}

export default Student;