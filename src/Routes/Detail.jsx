import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../Components/utils/useFetch';
import { USERS_URL } from '../Components/utils/constants';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const {id} = useParams()
  const {data: user, loading, error} = useFetch(`${USERS_URL}/${id}`);
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  // {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
  // {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
     return (
        <>
            <h1>Detail Dentist id </h1>
            {!loading && (
                <div className="card" style="">
                    <img src='public/images/doctor.jpg' alt="User" style=""/>
                    <div style="">
                        <div style="">
                            <span style="">Name:</span> {user.name}
                        </div>
                        <div style="">
                            <span style="">Username:</span> {user.username}
                        </div>
                        <div style="">
                            <span style="">Email:</span> {user.email}
                        </div>
                        <div style="">
                        <span
                            style="">Address:</span> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
                        </div>
                        <div style="">
                            <span style="">Phone:</span> {user.phone}
                        </div>
                        <div style="">
                            <span style="">Website:</span> {user.website}
                        </div>
                        <div style="">
                            <span style="">Company:</span> {user.company.name}
                        </div>
                        <div style="">
                            <span style="">Catch Phrase:</span> {user.company.catchPhrase}
                        </div>
                        <div style="">
                            <span style="">Business:</span> {user.company.bs}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}


export default Detail