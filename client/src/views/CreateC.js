import React, { useEffect, useState } from 'react';
import CancionForm from '../components/CancionForm';
import { simplePost } from '../services/simplePost';
import { useNavigate } from "react-router-dom";

function CreateC() {

    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const crearCancion = async(values) => {
        values.compositores = [values.compositor1,values.compositor2,values.compositor3];
        const response = await simplePost("http://localhost:8000/api/cancion/new", values);
        if (response.data.message ==="") {
            alert("Se ha creado la cancion")
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

return (
    <div>{errors?.map((error, index) => <p key={index}>{error}</p>)}
    <CancionForm nombre="" artista="" compositor1="" compositor2="" compositor3="" onSubmitProp={crearCancion} action={"CREAR"}/></div>
)
}

export default CreateC