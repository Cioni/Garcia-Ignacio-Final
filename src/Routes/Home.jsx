import React from 'react';
import Card from '../Components/Card';
import Loader from '../Components/Card';
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {state} = useContextGlobal()
  const dataCard = () =>{
    let content;
    if(state.data?.status){
      content = <p>Error {state.data.status}</p>
    }else{
      content = 
      state.data?.length > 0
        ? state.data.map(d => <Card key={d.id} dentist={d} />)
        : <Loader />
    }
    return content
  }

  return (
    <>
      <h1>Home</h1>
      <h3 className='h3-home'>Nuestros profesionales: </h3>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {dataCard()}
      </div>
    </>
  )
}

export default Home