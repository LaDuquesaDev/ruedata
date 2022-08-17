import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Start from './components/Start';
import Crud from './components/Crud';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={ <Crud /> }/>
            {/* <Route path='/Crud' element={ <Crud /> }/> */}
        </Routes>
    </BrowserRouter>
  );
}

export default App;