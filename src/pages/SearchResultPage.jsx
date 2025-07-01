import { useParams } from "react-router-dom";
import useFetch from "../hooks/UseFetch";
import { Link } from "react-router-dom";

function SearchResultPage() {
  const { searchTerm } = useParams();

  const { data, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
  );
  if (error) return <h2>{error}</h2>;
  if (loading) return <h2 className="text-5xl animate-pulse">loading...</h2>;
  if (!data || !data.meals || data.meals.length === 0) {
    return (
      <h2 className="text-5xl animate-pulse">
        No Recipe Found for {searchTerm}...
      </h2>
    );
  }

  return (
    <>
      <div>
         <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" >
          {data.meals.map((meal) => (
            <li key={meal.idMeal} className="mt-2">
                <Link key={meal.idMeal} to={`/recipe/${meal.idMeal}`} className="mt-3 bg-white rounded-lg shadow-md">
                <h2 className="text-lg font-semibold">{meal.strMeal}</h2>
                <img src={meal.strMealThumb} className="w-full h-full rounded p-3" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default SearchResultPage;
