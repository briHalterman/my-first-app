/*
  return JSX
    React Fragments <> </>

    const myFunction = () => {

    }
*/

import Student from './student';

const Teacher = () => {
  const teacherName = 'XYZ, EFG';
  const studentRoster = [
    'Student Name 1',
    'Student Name 2',
    'Student Name 3',
  ];
  return (
    <>
      <p>Teacher Name 1 {teacherName}</p>
      <h1> Students under teacher {teacherName}'s class </h1>
      {
        studentRoster.map((studentN, index) => (
        // console.log(index); // item's index in array
        <Student key={index} studentName={studentN} />
      ))}
      {/* <Student studentName="Student 1" /> */}
    </>
  );
};

export default Teacher;
