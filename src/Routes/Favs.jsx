import React from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {state, dispatch} = useContextGlobal()
  const favs = state.favs

  return (
    <section className="favs">
    <div className="action-favs">
      <h1>Dentists Favs</h1>
      {favs.length > 0 && <button onClick={() => {dispatch({type: "removeAllFavs"})}}>Remove all</button>}
    </div>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favs.length > 0
        ? favs.map(fav => <Card key={fav.id} dentist={fav}/>)
        : <p>No agregaste ningun favorito</p>
        }
      </div>
    </section>
  );
};

export default Favs;
