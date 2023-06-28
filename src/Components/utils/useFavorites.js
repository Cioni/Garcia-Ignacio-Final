import {useState} from "react";

export const useFavorites = () => {
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("favorites")) || [])
  
    const updateFavorites = (updateFavorites) => {
        localStorage.setItem("favorites", JSON.stringify(updateFavorites));
        setFavorites(updateFavorites)
    }
  
    return {favorites, updateFavorites}
  }
  