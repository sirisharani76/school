import { IStudents } from "./Students.reducer";
import "./Students.css";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

export interface IStudentsProps extends IStudents {
  onDeleteStudent: (id: string) => void;
}
const Students = (props: IStudentsProps) => {
  const { students, onDeleteStudent } = props;
  /* return (<>
         {students.map((student)=>{
         const{id,name, age, marks}=student   
           return  <div key={id} className="StudentData">
               <h1>Student Name: {name}</h1>  
               <h1>age:{age}</h1>
               <h1>Marks:{marks}</h1>
                  </div>  
                
         })}
         </>);  */

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">id</TableCell>
            <TableCell align="right">name</TableCell>
            <TableCell align="right">age</TableCell>
            <TableCell align="right">marks</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student) => {
            const { id, name, age, marks } = student;
            return (
              <TableRow
                key={id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">{id}</TableCell>
                <TableCell align="right">{name}</TableCell>
                <TableCell align="right">{age}</TableCell>
                <TableCell align="right">{marks}</TableCell>
                <TableCell align="right">
                  <Tooltip title="delete">
                    <Button
                      variant="contained"
                      onClick={() => onDeleteStudent(id)}
                    >
                      remove
                    </Button>
                  </Tooltip>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default Students;

//to do list
// all array methods

//conatiner component call api
