import {Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs';

@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Spaghetti',
  //     'Spaghetti Sedap',
  //     'https://www.seriouseats.com/2020/03/20200224-carretteira-pasta-vicky-wasik-21.jpg',
  //     [new Ingredient('Meat', 1)]
  //   ),
  //   new Recipe(
  //     'Mushroom Soup',
  //     'Mushroom Soup Sedap',
  //     'https://hips.hearstapps.com/del.h-cdn.co/assets/17/39/1506455983-delish-cream-mushroom-soup.jpg',
  //     [new Ingredient('Bun', 2)]
  //   ),
  //   new Recipe('Chicken',
  //     'Chicken Sedap',
  //     'https://www.onceuponachef.com/images/2020/05/best-grilled-chicken-scaled.jpg',
  //     [new Ingredient('Fries', 3)]
  //   )
  // ];

  private recipes: Recipe[] = [];

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]): void {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe): void {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe): void {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number): void {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
