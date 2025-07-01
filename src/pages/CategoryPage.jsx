import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function CategoryPage() {
  const [meals, setMeals] = useState(null);
  const { categoryName } = useParams();

  useEffect(() => {
    const fetchMeals = async () => {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
      );
      const data = await res.json();
      console.log(data);
      setMeals(data.meals);
    };
    fetchMeals();
  }, [categoryName]);
  return (
    <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
        {meals &&
          meals.map((meal) => (
            <Link key={meal.idMeal} to={`/recipe/${meal.idMeal}`} className="border rounded shadow p-2 ">
              <h2 className="text-lg font-semibold mb-2">{meal.strMeal}</h2>
              <img src={meal.strMealThumb} className="w-full h-40 object-cover rounded" />
              
            </Link>
          ))}
      </div>
    </>
  );
}
export default CategoryPage;
