import { useCallback, useEffect, useState } from "react";
import {
  deleteStudentById,
  fetchStudentData,
  fetchStudentDataAsync,
  fetchStudentDataAxios,
} from "./Student.service";
import Students from "./Students";
import { IStudent, IStudents } from "./Students.reducer";

const StudentsContainer = () => {
  const [students, setStudents] = useState<IStudent[]>([
    { id: "101", name: "Saraswathi", age: 24, marks: 45 },
    { id: "102", name: "Vani", age: 26, marks: 48 },
    { id: "103", name: "Ravi", age: 29, marks: 45 },
  ]);
  useEffect(() => {
    fetchStudentDataAxios().then((students) => setStudents(students));
  }, []);

  const onDeleteStudent = useCallback((id: string) => {
    deleteStudentById(id).then(({ id }) => setStudents(students));
  }, []);

  return (
    <>
      <Students
        students={students}
        onDeleteStudent={onDeleteStudent}
      ></Students>
    </>
  );
};
export default StudentsContainer;
