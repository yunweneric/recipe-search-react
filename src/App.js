import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import Recipe from "./components/recipe";

import { Form, RecipeContainer } from "./styled/styled";
function App() {
  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  useEffect(() => {
    getRecipes();
  }, [query]);

  const ref = useRef("");
  const getRecipes = async () => {
    const res = await fetch(exampleUrl);
    const data = await res.json();
    setRecipe(data.hits);
  };

  const APPKEY = "963f39296c3bfbb6e83ed93513b43067";
  const APPID = "1c5908e7";
  const exampleUrl = `https://api.edamam.com/search?q=${query}&app_id=${APPID}&app_key=${APPKEY}`;

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = async (e) => {
    e.preventDefault();
    setQuery(search);
  };
  return (
    <div className="App">
      <Form>
        <form onSubmit={getSearch}>
          <input
            type="text"
            placeholder="Search Your Recipe"
            onChange={onChange}
            ref={ref}
          />
          <button type="submit">Search</button>
        </form>
      </Form>

      <RecipeContainer>
        <div className="container">
          {recipe.length !== 0 ? (
            recipe.map((recipe, index) => {
              return (
                <Recipe
                  key={index}
                  calories={recipe.recipe.calories}
                  title={recipe.recipe.label}
                  imgUrl={recipe.recipe.image}
                  labels={recipe.recipe.healthLabels}
                />
              );
            })
          ) : (
            <>
              <p>Loading...</p>
            </>
          )}
        </div>
      </RecipeContainer>
    </div>
  );
}
export default App;
