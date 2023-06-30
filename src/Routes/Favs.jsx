import React from "react";
import Card from "../Components/Card";
import NotFound from "./NotFound";
import { useFavorites } from "../Components/utils/useFavorites"
import { useGlobalContext } from "../Components/utils/global.context";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
    const {favorites, updateFavorites} = useFavorites()
    const { globalState: { theme } } = useGlobalContext();

    function renderFavorites() {
        return favorites && favorites.map((item) => (
            <Card key={item.id} name={item.name} username={item.username} id={item.id}
                  favorites={favorites} updateFavorites={updateFavorites}/>
        ));
    }

    function renderNotFound() {
        return favorites.length === 0 && (
            <NotFound/>
        );
    }

    return (
        <>
            <h1 className={theme === "dark" ? "dark" : "light"}>Dentists Favs</h1>
            <div className="card-grid">
                {/* este componente debe consumir los destacados del localStorage */}
                {/* Deberan renderizar una Card por cada uno de ellos */}
                {renderFavorites()}
                {renderNotFound()}
            </div>
        </>
    );
};

export default Favs;