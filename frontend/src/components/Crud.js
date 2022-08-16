import React, { useState, useEffect } from 'react';
// import { BsTrash } from "react-icons/bs";
// import { BsPencil } from "react-icons/bs";
import AddPet from './AddPet';
import axios from 'axios';

import '../styles/crud.css';

const Crud = () => {
    const [pets, setPets] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);

    const getData = () => {
        const response = axios.get("http://localhost:8000/pets/")
        return response;
    };

    useEffect(() => {
       getData().then((response) => {
        setPets(response.data);
       }).catch(error => console.log("ERROR",error))
    }, [])

    return (
        <>
            <section className='pets-section'>                                
            {pets !== [] ? (
                pets.map(pet => {
                    return (
                        <div>
                            <p>{pet.name} {pet.age} {pet.specie}</p>
                        </div>
                    )
                })
                ) : console.log('No pets registered')}
            </section>
            <AddPet/>
        </>
    )
    
}

export default Crud;