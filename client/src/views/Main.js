import React, { useEffect, useState } from 'react';
import { simpleGet } from '../services/simpleGet'
import {useParams,useNavigate,Link} from "react-router-dom"
import Table from 'react-bootstrap/Table';


const Main = () => {
    
    const [pets, setPets] = useState();

        useEffect(() => {
            traerPets()
    }, []);    

    const traerPets = async() =>{
        const response = await simpleGet("http://localhost:8000/api/pets")
        console.log(response)
        setPets(response.data.pets)
    }

    return (
        <div className='container'>
            
            <div className='sub-container-bottom'>
            <h4>These pets are looking for a good home</h4>         
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {pets?.map((pet)=>
                    <tr key= {pet._id}>
                        <th scope="row">{pet.nombre}</th>
                        <td> {pet.tipo} </td>
                        <td> 
                            <Link to={`/pet/update/${pet._id}`}>edit</Link>
                            |
                            <Link to={`/pet/${pet._id}`}>details</Link>
                        </td>
                    </tr>
                    )}
                </tbody>
            </Table>
            
            </div>   
            
        </div>
    );
}

export default Main;
