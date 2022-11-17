import React from 'react';
import { useEffect, useState } from 'react';
import {useParams,useNavigate,Link} from "react-router-dom"
import { simpleGet } from '../services/simpleGet';
import { simpleDelete } from '../services/simpleDelete';
import { simpleUpdate } from '../services/simpleUpdate';
import Button from 'react-bootstrap/Button';


const Details = () => {

    const {id} = useParams()
    const [pet, setPet] = useState()
    const [buttonState, setButtonState] = useState(false);
    const [likes, setLikes] = useState();
    const navigate = useNavigate()

    const backToHome = () => {
        navigate(`/`)
    }

    const getPet = async() => {
        const response = await simpleGet("http://localhost:8000/api/pet/" + id)
        setPet(response.data.pet)
        console.log(response.data.pet.likes)
        setLikes(response.data.pet.likes)
    }

    const eliminarPet = async() => {
        const response = await simpleDelete("http://localhost:8000/api/pet/" + id)
        navigate("/")
    }

    const updateLikes = async()=>{
        let updateLikes = {
            likes: Number(pet.likes) + 1
        } 
        const response = await simpleUpdate(`http://localhost:8000/api/pet/${id}`,updateLikes)
        console.log(response.data)
        setLikes((oldLikes)=>oldLikes + 1)
    }


    useEffect(() => {
        getPet()       
    }, []);

    const handleClick = () => {
        setButtonState(true)
        updateLikes();
    }

    

    return (
        <div className='container-detail'>
            <div className='container-detail-top'>
                <h2>Pet Shelter</h2>
                {<Button className="logout-button" variant="link" onClick={backToHome}>back to home</Button>}
            </div>
            <div className='container-detail-medium'>
                <h4>Detail about : {pet?.nombre}</h4>
                <button onClick={() => eliminarPet()}>Adopt {pet?.nombre}</button>
            </div>    
            <div className='container-detail-bottom'>
                <h4>Pet type : {pet?.tipo}</h4>
                <h4>Description: {pet?.descripcion}</h4>
                <h4>Skills: {pet?.skills}</h4>
                <div className='likes'>
                <button className='btn-likes' onClick={handleClick} disabled={buttonState}>Like {pet?.nombre}</button>
                {
                    likes&&
                    <p>{likes}</p>
                }
                <h5>like(s)</h5>
                
                
                </div>                
            </div>
            
        </div>
    );
}

export default Details;