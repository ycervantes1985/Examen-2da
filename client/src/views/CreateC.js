import React, { useEffect, useState } from 'react';
import PetForm from '../components/PetForm';
import { simplePost } from '../services/simplePost';
import { useNavigate } from "react-router-dom";

function CreateC() {

    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const crearPet = async(values) => {
        values.skills = [values.skill1,values.skill2,values.skill3];
        const response = await simplePost("http://localhost:8000/api/pet/new", values);
        console.log("esta es la respo",response)
        if (response.data.message ==="") {
            alert("Se ha creado la mascota")
            navigate("/");               
            }else {
                const errorResponse = response.data.errors;
                console.log(response.data.errors)
                const errorArr = [];
            for (const llave of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[llave].message);
            }
            setErrors(errorArr);
            } 
            
        
        
}

useEffect(() => {
    console.log("estos son los errores", errors)
}, [errors]);

return (
    <div >{errors?.map((error, index) => <div className={`alert alert-danger`} role="alert" key={index}>{error}</div>)} 
    <PetForm nombre="" artista="" skill1="" skill2="" skill3="" onSubmitProp={crearPet} action={"Add"}/></div>
)
}

export default CreateC