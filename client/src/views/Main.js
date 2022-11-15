import React, { useEffect, useState } from 'react';
import { simpleGet } from '../services/simpleGet'
import { Link, useNavigate } from "react-router-dom";

const Main = () => {
    
    const [canciones, setCanciones] = useState();

        useEffect(() => {
        traerCanciones()
    }, []);    

    const traerCanciones = async() =>{
        const response = await simpleGet("http://localhost:8000/api/canciones")
        console.log(response)
        setCanciones(response.data.canciones)
    }

    return (
        <div>
            <Link to={`/crear-cancion/`}>Crear Cancion</Link>
            <h2>Listado de canciones y autores</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Compositores</th>
                        <th scope="col">Likes</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {canciones?.map((cancion)=>
                    <tr key= {cancion._id}>
                        <th scope="row">{cancion.nombre}</th>
                        <td> {cancion.tipo} </td>
                        <td> {cancion.descripcion} </td>
                        <td> {cancion.compositores} </td>
                        <td> {cancion.likes} </td>
                        <td> 
                            <Link to={`/cancion/update/${cancion._id}`}>Editar</Link>
                            |
                            <Link to={`/cancion/${cancion._id}`}>Detalle</Link>
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Main;
