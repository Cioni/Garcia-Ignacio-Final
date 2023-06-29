import React from 'react'
import Card from '../Components/Card';
import { useFavorites } from '../Components/utils/useFavorites';
import { useGlobalContext } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
    const {globalState: {theme, data}} = useGlobalContext()
    const {favorites, updateFavorites} = useFavorites()

    return (
        <main className="">
            <h1 className=''>HOME</h1>
            <div className="card-grid">
                {data && data.map((item) => (
                    <Card key={item.id} name={item.name} username={item.username} id={item.id}
                          favorites={favorites} updateFavorites={updateFavorites}/>
                ))}
            </div>
        </main>
    );
};

export default Home;