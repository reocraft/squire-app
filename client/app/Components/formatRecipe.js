'use client';
import React from 'react';

export const formatRecipe = (recipe) => {
  return (
    <div className="space-y-4">
      {/* Recipe Title */}
      <h1 className="text-xl font-semibold">{recipe.recipeName}</h1>

      {/* Macros */}
      <div className="space-y-1">
        <p>Calories: {recipe.totalCalories} kcal</p>
        <p>Protein: {recipe.proteinGrams} g</p>
        <p>Carbs: {recipe.carbGrams} g</p>
        <p>Fat: {recipe.fatGrams} g</p>
      </div>

      {/* Match reason */}
      <p className="mt-2 font-medium">Why this recipe fits your search:</p>
      <p>{recipe.matchReason}</p>

      {/* Ingredients */}
      <div>
        <p className="font-medium mt-2">Ingredients:</p>
        <ul className="list-disc list-inside">
          {recipe.ingredients.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Instructions */}
      <div>
        <p className="font-medium mt-2">Instructions:</p>
        <ol className="list-decimal list-inside space-y-1">
          {recipe.instructions.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </div>

      {/* Fun Fact */}
      <div>
        <p className="font-medium mt-2">Fun Fact:</p>
        <p>{recipe.funFact}</p>
      </div>
    </div>
  );
};
