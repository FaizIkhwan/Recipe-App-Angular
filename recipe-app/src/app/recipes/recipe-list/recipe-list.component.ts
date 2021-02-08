import {Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Spaghetti', 'Spaghetti Sedap', 'https://www.seriouseats.com/2020/03/20200224-carretteira-pasta-vicky-wasik-21.jpg'),
    new Recipe('Mushroom Soup', 'Mushroom Soup Sedap', 'https://hips.hearstapps.com/del.h-cdn.co/assets/17/39/1506455983-delish-cream-mushroom-soup.jpg'),
    new Recipe('Chicken', 'Chicken Sedap', 'https://www.onceuponachef.com/images/2020/05/best-grilled-chicken-scaled.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe): void {
    this.recipeWasSelected.emit(recipe);
  }
}
