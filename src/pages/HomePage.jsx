import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
function HomePage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const data = await res.json();
      console.log(data);

      setCategories(data.categories);
    };
    fetchCategories();
  }, []);

  return (
    <>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" >
        {categories &&
          categories.map((category) => (
            <Link
              key={category.idCategory}
              to={`/category/${category.strCategory}`}
              className="mt-4 bg-gray-200 rounded shadow p-2"
            >
              <h2 className="text-xl font-semibold">{category.strCategory}</h2>
              <img src={category.strCategoryThumb} />
             
            </Link>
          ))}
      </div>
    </>
  );
}
export default HomePage;
