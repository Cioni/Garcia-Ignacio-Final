import React, { useEffect, useState } from "react";
import { CardContainer, CardFavoriteButton, CardFavoriteButtonIcon, CardImg, CardName, CardUsername, StyledCard } from "./utils/Styles";
import { useNavigate } from "react-router-dom";
import docImg from "../assets/doctor.jpg"


const useCard = ({name, username, id, favorites, updateFavorites}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
      setIsFavorite(favorites.some((user) => user.id === id));
  }, [favorites, id]);

  const toggleFavorite = (e) => {
      e.stopPropagation();
      const updatedFavorites = isFavorite
          ? favorites.filter((user) => user.id !== id)
          : [...favorites, {name, username, id}];

      updateFavorites(updatedFavorites);
      setIsFavorite(!isFavorite);
  };

  const showDetail = () => navigate(`/detail/${id}`);

  return {isFavorite, showDetail, toggleFavorite}
}

const Card = ({name, username, id, favorites, updateFavorites}) => {
    const {isFavorite, showDetail, toggleFavorite} = useCard(
        {name, username, id, favorites, updateFavorites}
    )

    return (
        <CardContainer>
            <StyledCard onClick={showDetail}>
                <CardImg src={docImg} alt={id}/>
                <CardName value={name}/>
                <CardUsername value={username}/>
                <CardFavoriteButton onClick={(e) => toggleFavorite(e)}>
                    <CardFavoriteButtonIcon isFavorite={isFavorite}/>
                </CardFavoriteButton>
            </StyledCard>
        </CardContainer>
    );
};

export default Card;
