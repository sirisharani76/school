export interface IStudent {
  id: string;
  name: string;
  age: number;
  marks: number;
}
export interface IParent {
  id: string;
  motherName: string;
  fatherName: string;
  income: number;
}
export interface ITeacher {
  id: string;
  name: string;
  experience: number;
}
export interface ITeachers {
  teachers: ITeacher[];
}
export interface IParents {
  parents: IParent[];
}
export interface IStudents {
  students: IStudent[];
}

export interface ISchool extends ITeachers, IStudents, IParents {
            schoolName:string;
            schoolLogo:string;
      
}

export const initialData: ISchool = {
                  students: [],
                  teachers: [],
                  parents: [],
                  schoolName: "Viswa Vidyalaya",
                  schoolLogo: ""
};

export const reducer = (state: ISchool, action: any) => {
  const newState = { ...state };
  switch (action.type) {
    case "ADD_STUDENTS":
      newState.students = action.students;
      return newState;

    default:
      return state;
  }
};
