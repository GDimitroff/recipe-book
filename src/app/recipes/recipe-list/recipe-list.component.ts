import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is a simply a test',
            'https://bestofvegan.com/wp-content/uploads/2020/10/Pumpkin-Samosas-Samsa-with-Cilantro-Mint-Chutney_01.jpg'),
        new Recipe('A Test Recipe', 'This is a simply a test',
            'https://bestofvegan.com/wp-content/uploads/2020/10/Pumpkin-Samosas-Samsa-with-Cilantro-Mint-Chutney_01.jpg')
    ];

    constructor() { }

    ngOnInit(): void {
    }

}