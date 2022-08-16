import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from './components/Start';
import AddPet from './components/AddPet';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={ <Start /> }/>
            <Route path='/AddPet' element={ <AddPet /> }/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;