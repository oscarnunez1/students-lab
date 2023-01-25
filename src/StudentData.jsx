
import Student from "./Student";

const StudentData = (props) => {
  console.log(props);
  return (
    <>
      <h2>Student List</h2>
      {props.students.map(student =>
        <Student key={student.name} student={student} />
      )}
    </>
  );
}

export default StudentData;