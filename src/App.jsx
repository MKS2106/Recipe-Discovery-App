import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/Favorites";
import CategoryPage from "./pages/CategoryPage";
import RecipeDetailPage from "./pages/RecipeDetailPage"
import SearchResultPage from "./pages/SearchResultPage";
import { FavoriteProvider } from "./context/FavoriteContext";
function App() {
   return (
    <div className="max-w-5xl mx-auto px-4" >
    <FavoriteProvider>  
      <h1 className="font-extrabold text-center text-4xl text-green-600 mb-2"> 🍲 Recipe Discovery App</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetailPage />} />
        <Route path="/search/:searchTerm" element ={<SearchResultPage/>}/>
      </Routes>
      </FavoriteProvider>

      <footer className="text-center font-semibold py-4">
        <p>
          Copyright &#169; 2025 RecipeDicoveryApp: Developed by- Manasa
          Madhihalli Swamy
        </p>
      </footer>
    </div>
  );
}

export default App;
