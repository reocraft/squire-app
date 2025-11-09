'use client'
import { useState } from "react";
import Image from "next/image";
import SearchBar from "../Components/Searchbar";
import BoxButton from "../Components/BoxButton";
import SearchResult from "../Components/SearchResult";
import { formatRecipe } from "../Components/formatRecipe";


export default function Home() {

  const recipeData = {
    "recipeName": "Asian-Inspired Chicken & Broccoli Stir-fry",
    "totalCalories": 630,
    "proteinGrams": 62,
    "carbGrams": 72,
    "fatGrams": 10,
    "ingredients": [
      "6 oz (about 170g) boneless, skinless chicken breast, thinly sliced",
      "1.5 cups fresh broccoli florets",
      "1 cup cooked white rice (about 1/2 cup uncooked)",
      "2 cloves garlic, minced",
      "1 inch fresh ginger, grated",
      "2 tbsp low-sodium soy sauce",
      "1 tbsp rice vinegar",
      "1 tsp sesame oil",
      "1/4 tsp black pepper",
      "1/4 cup water or low-sodium chicken broth",
      "1 tsp cornstarch (optional, for thickening)"
    ],
    "instructions": [
      "In a small bowl, whisk together soy sauce, rice vinegar, sesame oil, black pepper, and water/broth. If using, dissolve cornstarch in a tablespoon of the liquid mixture and set aside.",
      "Heat a large non-stick skillet or wok over medium-high heat. Add chicken and stir-fry until cooked through and lightly browned, about 4-6 minutes. Remove chicken from the skillet and set aside.",
      "Add broccoli florets to the skillet. If needed, add a tablespoon of water to help steam them. Cook for 3-5 minutes until tender-crisp.",
      "Add minced garlic and grated ginger to the skillet and stir-fry for 30 seconds until fragrant.",
      "Return the cooked chicken to the skillet with the broccoli, garlic, and ginger. Pour the prepared sauce over everything. Bring to a simmer.",
      "If using, stir in the cornstarch slurry and cook for another minute until the sauce thickens slightly.",
      "Serve immediately over the cooked white rice."
    ],
    "matchReason": "This Asian-Inspired Chicken & Broccoli Stir-fry is an excellent choice for you, as it perfectly aligns with your preference for low-fat Asian cuisine and helps you meet your remaining protein goal while staying comfortably within your calorie limit.",
    "funFact": "Chicken breast is not only a lean source of protein, but it also contains B vitamins like niacin and B6, which are crucial for energy metabolism and overall cell function."
  }


  const [searchQuery, setSearchQuery] = useState("");
  const [resultText, setResultText] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState(null);

  

  // Daily goals (placeholder values)
  const dailyCalories = 2000;
  const dailyProteins = 100;
  const dailyCarbs = 250;
  const dailyFats = 60;
  const id = 123456;
  
  

  // State for remaining macros
  const [remainingCalories, setRemainingCalories] = useState(dailyCalories);
  const [remainingProteins, setRemainingProtein] = useState(dailyProteins);
  const [remainingCarbs, setRemainingCarbs] = useState(dailyCarbs);
  const [remainingFats, setRemainingFat] = useState(dailyFats);

  const [userId, setUserId] = useState(id);

  

  const handleSearch = (query) => {
    if (!query.trim()) return;

    if (query.toLowerCase().includes("chicken")) {
      setCurrentRecipe(recipeData);
      setResultText(formatRecipe(recipeData));
      setShowResult(true);
    } else {
      setCurrentRecipe(null);
      setResultText(`No matching recipe found for "${query}"`);
      setShowResult(true);
    }
  };

  const addRecipeToDailyIntake = () => {
    if (!currentRecipe) return;

    setRemainingCalories(prev => Math.max(prev - currentRecipe.totalCalories, 0));
    setRemainingProtein(prev => Math.max(prev - currentRecipe.proteinGrams, 0));
    setRemainingCarbs(prev => Math.max(prev - currentRecipe.carbGrams, 0));
    setRemainingFat(prev => Math.max(prev - currentRecipe.fatGrams, 0));
  };

  

  return (
    <div className="min-h-screen font-sans dark:bg-light bg-gray-50">
      <main
        className="
          flex flex-col
          items-start
          justify-start
          px-6 sm:px-10 md:px-20 lg:px-40 xl:px-60
          py-10
          space-y-10
        "
      >
        {/* Top-left heading */}
        <h1
          className="
            text-black
            text-[clamp(1.8rem,4vw,3rem)]
            font-semibold
          "
        >
          Hello User 👋
        </h1>

        {/* Search bar */}
        <div className="w-full flex flex-col gap-4">
          <SearchBar
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onSearch={() => handleSearch(searchQuery)}
          />

          {/* Search result + add to daily intake button */}
          {showResult && currentRecipe && (
            <div className="flex flex-col gap-2 w-full">
              <SearchResult text={resultText} />
              <button
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-max"
                onClick={addRecipeToDailyIntake}
              >
                Add to Daily Intake
              </button>
            </div>
          )}

          {/* If no recipe found */}
          {showResult && !currentRecipe && (
            <SearchResult text={resultText} />
          )}
        </div>

         {/* Remaining daily macros */}
        <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg w-full">
          <h2 className="font-semibold mb-2">Remaining Daily Macros</h2>
          <p>Calories: {remainingCalories} kcal</p>
          <p>Protein: {remainingProteins} g</p>
          <p>Carbs: {remainingCarbs} g</p>
          <p>Fat: {remainingFats} g</p>
        </div>


        {/* Button boxes */}
        <div
          className="
            flex flex-wrap justify-center  /* <-- center horizontally */
            gap-4 sm:gap-6 md:gap-8 lg:gap-10
            pt-8 sm:pt-10 md:pt-12
            w-full     
          "
        >
          <BoxButton
            imageSrc="/images/icon1.png"
            title="Profile"
            onClick={() => console.log('Profile clicked!')}
          />
          <BoxButton
            imageSrc="/images/icon2.png"
            title="Messages"
            onClick={() => console.log('Messages clicked!')}
          />
          <BoxButton
            imageSrc="/images/icon3.png"
            title="Settings"
            onClick={() => console.log('Settings clicked!')}
          />
        </div>
      </main>
    </div>
  );
}
