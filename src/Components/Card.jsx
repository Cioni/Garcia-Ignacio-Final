import React from "react";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'


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

  const CardContainer = ({children}) => {
    const container = {
        marginBottom: "2rem",
    }

    return (
        <div style={container}>
            {children}
        </div>
    );
}

return (
  <div className="card">
    <Link to={"/detail/" + id}>
      <img src="/images/doctor.jpg" alt="" />
      <h3>{name}</h3>
      <p>{username}</p>
    </Link>
      {!isfav 
        ? <button onClick={addFav} className="favButton"> <AiOutlineStar/> </button>
        : <button onClick={removeFav} className="favButton"><AiFillStar/></button>
      }
      
  </div>
);
};

export default Card;
