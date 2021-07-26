import { EventEmitter } from "@angular/core";

import { Recipe } from "./recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a elit id justo sagittis luctus eu vitae dui.',
            'https://bestofvegan.com/wp-content/uploads/2020/10/Pumpkin-Samosas-Samsa-with-Cilantro-Mint-Chutney_01.jpg'),
        new Recipe('Test Number 2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a elit id justo sagittis luctus eu vitae dui.',
            'https://img.taste.com.au/vhZfDaJw/taste/2017/07/lemongrass-beef-bowl-128353-1.jpg')
    ];

    getRecipes(): Recipe[] {
        return this.recipes.slice();
    }
}