import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { my_recipe } from "../recipe";

const RecipeListPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter the recipe list based on the search term
  const filteredRecipes = Object.keys(my_recipe).filter(
    (recipe) =>
      my_recipe[recipe].name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />
      <div className="container">
        <div style={{ marginTop: "100px" }} className="inner-container">
          <h1>Our Recipes</h1>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search recipes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="recipe-list">
            {filteredRecipes.map((recipe) => {
              return (
                <Link style={{ textDecoration: "none" }} to={`/recipe/${recipe}`}>
                  <div className="recipe">
                    <h2>{my_recipe[recipe].name}</h2>
                    <div className="sub-section">
                      <p>{my_recipe[recipe].preparation_time}</p>
                      <p>{my_recipe[recipe].servings} servings</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeListPage;
