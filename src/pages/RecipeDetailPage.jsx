import useFetch from "../hooks/UseFetch";
import { useParams } from "react-router-dom";
import { useFavorite } from "../context/FavoriteContext";

function RecipeDetailPage() {
  const { recipeId } = useParams();

  const { favorites, addFavorite } = useFavorite();
  const { removeFavorite } = useFavorite();

  const { data, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
  );
  if (error) return <h2>{error}</h2>;

  const meal = data?.meals[0];
  // console.log(meal);
  if (loading || !meal)
    return <h2 className="text-5xl animate-pulse">loading...</h2>;

  const isFav = favorites.some((fav) => fav.idMeal === meal.idMeal);
  const handleAdd = () => {
    addFavorite(meal);
  };

  const handleRemove = () => {
    removeFavorite(meal.idMeal);
  };

  return (
    <div className="max-w-xl mx-auto bg-white rounded shadow p-6">
      <img src={meal.strMealThumb} className="w-full h-full rounded mb-4" />
        <div className="flex items-center gap-2 mt-1 mb-2">
          <h2 className="font-bold text-3xl">{meal && meal.strMeal}</h2>
          <span className="font-bold text-3xl ml-3">{isFav ? "⭐" : ""}</span>
        </div>
        
        <p className="mt-2 text-gray-900">{meal.strInstructions}</p>
        
    
      <div className="flex space-x-4 mt-5">
        <button className="border ml-3 rounded p-2 bg-green-200 font-semibold" onClick={handleAdd}>
          Add to Fav
        </button>
        <button className="border ml-3 rounded p-2 bg-green-200 font-semibold" onClick={handleRemove}>
          Remove From Fav
        </button>
      </div>
    </div>
  );
}
export default RecipeDetailPage;
