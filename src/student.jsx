/*
Tradition (props) => props.studentName
Object Destructure {studentName} => directly studentName
*/

function Student({ studentName }) {
  return <p>Student Name is {studentName}</p>;
}

export default Student;
