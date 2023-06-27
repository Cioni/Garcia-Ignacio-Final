import React from "react";
import { Link } from "react-router-dom/dist";
import { useContextGobal } from "../Components/utils/global.context";

const Card = ({ dentist }) => {

  const { name, username, id } = dentist
  const { state, dispatch } = useContextGobal()
  const favs = state.favs
  const isfav = favs.find

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    dispatch({type: "addFav", payload: dentist})
  }
  const removeFav = () => {
    dispatch({type:"removeFav", payload: dentist})
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <Link to={"/detail/" + id}>
          <img src="public\images\doctor.jpg" alt=""/>
          <h3>{name}</h3>
          <p>{username}</p>
        </Link>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
          {!isfav
            ? <button onClick={addFav} className="favButton"> Add Fav </button>
            : <button onClick={removeFav} className="favButton"> Remove Fav </button>

          }
    </div>
  );
};

export default Card;
