import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Wiener-Schnitzel02.jpg',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://www.thespruceeats.com/thmb/3C12TFvgPi-kpCGBdAVq36zQjF8=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Meatloaf-Spaghetti-58addc5a5f9b58a3c9d3ab8e.jpg',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
    }
  ]

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    })
  }

}
