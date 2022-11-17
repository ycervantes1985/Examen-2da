import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PetForm from '../components/PetForm';
import { simpleGet } from '../services/simpleGet';
import { simpleUpdate } from '../services/simpleUpdate';

const Update = () => {
  const {id} = useParams()
  
  const [pet, setPet] = useState()
  const navigate = useNavigate()

  const getPet = async() => {
      const response = await simpleGet("http://localhost:8000/api/pet/" + id)
      setPet(response.data.pet)
  }

  useEffect(() => {
    getPet()       
  }, []);


  const updatePet = async(values) => {
    console.log("values desde actualizar", values)
    values.skills = [values.skill1,values.skill2,values.skill3];
    const response = await simpleUpdate(`http://localhost:8000/api/pet/${id}`, values);
    console.log(response)
    navigate("/");
} 



  return (
    <div>
      <h4 className='edit-pet-name'>Edit: {pet?.nombre}</h4>
      {
        pet&&
        <PetForm nombre={pet.nombre} tipo={pet.tipo} descripcion={pet.descripcion} skill1={pet?.skills[0]} skill2={pet?.skills[1]} skill3={pet?.skills[2]} onSubmitProp={updatePet} action={"Edit Pet"}/>
      }
      
    </div>
  );
}

export default Update;
