import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import StudentsContainer from './components/Students/Students.container';
import BasicTable from './components/Table/Table';
import { Button } from '@mui/material';

function App() {
  return (
    <div className="App">
      <StudentsContainer></StudentsContainer>
{/* <BasicTable></BasicTable> */}
,{/* <Button>ADD</Button> */}
    </div>
  );
}

export default App;
