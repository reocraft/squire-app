'use client';
import React from 'react';

export const formatRecipe = (recipe) => {
  return `
Recipe: ${recipe.recipeName}
Calories: ${recipe.totalCalories} kcal
Protein: ${recipe.proteinGrams} g
Carbs: ${recipe.carbGrams} g
Fat: ${recipe.fatGrams} g
Why this recipe fits your search:
${recipe.matchReason}
  `.trim();
};


// Other things we can add in our search result if needed.

// Ingredients:
// - ${recipe.ingredients.join("\n- ")}

// Instructions:
// ${recipe.instructions.map((step, i) => `${i + 1}. ${step}`).join("\n")}


// Fun Fact:
// ${recipe.funFact}