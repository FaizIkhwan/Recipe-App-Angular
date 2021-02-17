import {Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Spaghetti',
      'Spaghetti Sedap',
      'https://www.seriouseats.com/2020/03/20200224-carretteira-pasta-vicky-wasik-21.jpg',
      [new Ingredient('Meat', 1)]
    ),
    new Recipe(
      'Mushroom Soup',
      'Mushroom Soup Sedap',
      'https://hips.hearstapps.com/del.h-cdn.co/assets/17/39/1506455983-delish-cream-mushroom-soup.jpg',
      [new Ingredient('Bun', 2)]
    ),
    new Recipe('Chicken',
      'Chicken Sedap',
      'https://www.onceuponachef.com/images/2020/05/best-grilled-chicken-scaled.jpg',
      [new Ingredient('Fries', 3)]
    )
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.slService.addIngredients(ingredients);
  }
}
