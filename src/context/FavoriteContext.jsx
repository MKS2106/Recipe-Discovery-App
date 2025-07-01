import useLocalStorage from "../hooks/useLocalStorage";
import { createContext, useContext } from "react";

export const FavoriteContext = createContext([]);
export function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useLocalStorage("fav", []);

  const addFavorite = (meal) => {
    if (favorites.some((fav) => fav.idMeal === meal.idMeal)) {
      alert("Recipe already available");
      return;
    } else {
      setFavorites([...favorites, meal]);
    }
  };

  const removeFavorite = (idMeal) => {
    setFavorites(favorites.filter((favorite) => favorite.idMeal !== idMeal));
  };

  return (
    <FavoriteContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}
export const useFavorite = () => useContext(FavoriteContext);
