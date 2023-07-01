import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../Components/utils/useFetch';
import { USERS_URL } from '../Components/utils/constants';
import docImg from "../assets/doctor.jpg"
import { useGlobalContext } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const {id} = useParams()
  const {data: user, loading } = useFetch(`${USERS_URL}/${id}`);
  const { globalState: { theme } } = useGlobalContext();

 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  // {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
  // {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
     return (
        <>
            <h1 className={theme === "dark" ? "dark" : "light"}>Details</h1>
            {!loading && (
                <div className="card">
                    <img src={docImg} alt="User" style={{ width: '100px' }}/>
                    <div>
                        <div>
                            <span>Name:</span> {user.name}
                        </div>
                        <div>
                            <span>Username:</span> {user.username}
                        </div>
                        <div>
                            <span>Email:</span> {user.email}
                        </div>
                        <div>
                            <span>Address:</span> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
                        </div>
                        <div>
                            <span>Phone:</span> {user.phone}
                        </div>
                        <div>
                            <span>Website:</span> {user.website}
                        </div>
                        <div>
                            <span>Company:</span> {user.company.name}
                        </div>
                        <div>
                            <span>Catch Phrase:</span> {user.company.catchPhrase}
                        </div>
                        <div>
                            <span>Business:</span> {user.company.bs}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}


export default Detail