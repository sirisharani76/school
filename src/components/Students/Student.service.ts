import axios from "axios";

export const fetchStudentData = () =>
  fetch("http://localhost:4444/students/")
    .then((rawResult) => rawResult.json())
    .then((finalResult) => finalResult)
    .catch((error) => {
      console.log(error);
    });

export const fetchStudentDataAsync = async () => {
  try {
    const rawResult = await fetch("http://localhost:4444/students/");
    const finalResult = await rawResult.json();
    return finalResult;
  } catch (e) {
    throw new Error(String(e));
  }
};

export const fetchStudentDataAxios = async () => {
  try {
    const { data } = await axios.get("http://localhost:4444/students/");
    return data;
  } catch (e) {
    throw new Error(String(e));
  }
};

export const deleteStudentById = async (id: string) => {
  try {
    const { data } = await axios.delete(`http://localhost:4444/students/${id}`);
   
    return data;
  } catch (e) {
    throw new Error(String(e));
  }
};
