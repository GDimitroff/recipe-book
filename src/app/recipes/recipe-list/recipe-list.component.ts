import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    @Output() recipeWasSelected = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a elit id justo sagittis luctus eu vitae dui.',
            'https://bestofvegan.com/wp-content/uploads/2020/10/Pumpkin-Samosas-Samsa-with-Cilantro-Mint-Chutney_01.jpg'),
        new Recipe('Test Number 2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a elit id justo sagittis luctus eu vitae dui.',
            'https://img.taste.com.au/vhZfDaJw/taste/2017/07/lemongrass-beef-bowl-128353-1.jpg')
    ];

    constructor() { }

    ngOnInit(): void {
    }

    onRecipeSelected(recipe: Recipe) {
        this.recipeWasSelected.emit(recipe);
    }

}