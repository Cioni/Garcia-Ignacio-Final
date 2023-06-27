import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Components/Loader';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const {id} = useParams()
  const url = 'https://jsonplaceholder.typicode.com/users/' + id
  const [dentist, setDentist] = useState()

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setDentist(data))
  }, [url])
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
  {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
  return (
    
    <section className='card-container'>
      <h1>Detail Dentist {id}</h1>
      {dentist
        ?
          <div className='card detail'>
            <img src='' />
            <div className='details'>
              <h3>{dentist?.name}</h3>
              <p><strong>Email:</strong> {dentist?.email}</p>
              <p><strong>Phone:</strong> {dentist?.phone}</p>
              <p><strong>Username:</strong> {dentist?.username}</p>
              <p><strong>Website</strong> https://{dentist?.website}</p>
            </div>
          </div>
          : <Loader />    
      }
      
    </section>
  )
}

export default Detail