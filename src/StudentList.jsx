
import Student from "./Student";

const StudentList = (props) => {
  return (
    <>
      {props.students.map((student, idx) =>
        <Student student={student} key={idx} />
      )}
    </>
  );
}

export default StudentList;