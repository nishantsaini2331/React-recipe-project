import axios from "axios";
import React, { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [total, setTotal] = useState(0);

  async function fetchRecipes(skipCount) {
    try {
      const { data } = await axios.get(`https://dummyjson.com/recipes?limit=6&skip=${skipCount}`);
      console.log(data);
      setRecipes((prev) => [...prev , ...data.recipes]);
      setTotal(data.total);
    } catch (error) {}
  }

  useEffect(() => {
    fetchRecipes(0);
  }, []);

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <form className="flex gap-2 max-w-md mx-auto mb-8">
        <input
          type="text"
          placeholder="Search recipes..."
          className="flex-1 border border-border rounded px-3 py-2 bg-card text-text outline-none focus:border-accent"
        />
        <button
          type="button"
          className="bg-accent hover:bg-accent-hover text-white rounded px-4 py-2 font-medium"
        >
          Search
        </button>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>

     { recipes.length < total && <div className="text-center mt-8">
        <button
          type="button"
          onClick={() => fetchRecipes(recipes.length)}
          className="bg-accent hover:bg-accent-hover text-white rounded px-6 py-2 font-medium"
        >
          Load More
        </button>
      </div>}
    </main>
  );
}

export default Home;
