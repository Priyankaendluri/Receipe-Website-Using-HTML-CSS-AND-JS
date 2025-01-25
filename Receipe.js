const recipes = [
  {
    id: 1,
    name: "Spaghetti Bolognese",
    image: "https://source.unsplash.com/featured/?spaghetti",
    description: "A classic Italian pasta dish with a rich meat sauce.",
    ingredients: ["Spaghetti", "Ground Beef", "Tomato Sauce", "Onion", "Garlic"],
    instructions: "Boil spaghetti. Cook beef with onion and garlic. Add tomato sauce. Combine and serve.",
  },
  {
    id: 2,
    name: "Chicken Curry",
    image: "https://source.unsplash.com/featured/?chicken-curry",
    description: "A flavorful chicken curry with spices and coconut milk.",
    ingredients: ["Chicken", "Coconut Milk", "Curry Powder", "Onion", "Garlic"],
    instructions: "Cook chicken with onions and garlic. Add spices and coconut milk. Simmer and serve.",
  },
  {
    id: 3,
    name: "Vegetable Stir Fry",
    image: "https://source.unsplash.com/featured/?vegetables",
    description: "A quick and healthy vegetable stir fry.",
    ingredients: ["Broccoli", "Carrot", "Bell Pepper", "Soy Sauce", "Garlic"],
    instructions: "Stir fry vegetables with garlic. Add soy sauce and serve.",
  },
];

// Function to display recipes
const displayRecipes = (recipesToShow) => {
  const recipeContainer = document.getElementById("recipe-container");
  recipeContainer.innerHTML = "";

  recipesToShow.forEach((recipe) => {
    const recipeCard = document.createElement("div");
    recipeCard.classList.add("recipe-card");

    recipeCard.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}">
      <div class="content">
        <h3>${recipe.name}</h3>
        <p>${recipe.description}</p>
        <button onclick="viewRecipe(${recipe.id})">View Recipe</button>
      </div>
    `;
    recipeContainer.appendChild(recipeCard);
  });
};

// Function to view recipe details
const viewRecipe = (id) => {
  const recipe = recipes.find((recipe) => recipe.id === id);
  alert(
    `Recipe: ${recipe.name}\n\nIngredients:\n${recipe.ingredients.join(
      ", "
    )}\n\nInstructions:\n${recipe.instructions}`
  );
};

// Search functionality
document.getElementById("search").addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm)
  );
  displayRecipes(filteredRecipes);
});

// Initial display
displayRecipes(recipes);

