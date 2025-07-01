import { useFavorite } from "../context/FavoriteContext";
import { Link } from "react-router-dom";

function FavoritesPage() {
  const { favorites } = useFavorite();

  if(!favorites || favorites.length === 0)
  {
    return <h2 className="text-center text-4xl font-semibold mt-8">No favorite recipes yet!</h2>
  }
  return (
    <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {favorites &&
          favorites.map((meal) => (
            <Link key={meal.idMeal} to={`/recipe/${meal.idMeal}`} className="mt-3 bg-white rounded-lg shadow-md">
              <img src={meal.strMealThumb} className="w-full h-full rounded p-4" />
              <h2 className="text-lg font-semibold mb-4">{meal.strMeal}</h2>
            </Link>
          ))}
      </div>

    </div>
    
    
  );
}
export default FavoritesPage;
