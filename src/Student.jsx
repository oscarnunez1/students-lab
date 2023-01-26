import Score from "./Score";

const Student = (props) => {
  return (
    <>
      <div className="card">
        <h2>{props.student.name}</h2>
        <h3>{props.student.bio}</h3>
        { props.student.scores.map((score, idx) => 
          <Score key={idx} score={score} />)}
      </div>
    </>
  )
}

export default Student;