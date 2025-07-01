import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
function NavBar() {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate();

  const handleSubmit= (e)=> {
    e.preventDefault();
    navigate(`/search/${encodeURIComponent(searchTerm)}`)
    setSearchTerm("");
  }

  return (
    <>
      <nav className="flex justify-between items-center bg-green-100 px-6 py-3 rounded shadow mb-4">
        <ul className="flex space-x-4 font-medium text-green-900 ">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">Favorites</NavLink>
          </li>
        </ul>
       
      </nav>
    <form onSubmit={handleSubmit}>
       <input
          className="border focus:ring-green-300 rounded w-1/2 px-3 py-1 mr-4"
          type="text"
          value={searchTerm}
          placeholder="Search Recipe"
          onChange={(e) => setSearchTerm(e.target.value)}         
        />
        <button type = "submit" className="rounded bg-green-300 font-semibold px-4 py-1 rounded hover:bg-green-600">Search</button>
    </form>


    </>
  );
}
export default NavBar;
