import { EventEmitter, Injectable } from "@angular/core";

import { ShoppingListService } from './../shopping-list/shoping-list.service';
import { Recipe } from "./recipe.model";
import { Ingredent } from "../shared/ingredent.module";

@Injectable() 
export class RecipeService{
    
    selectedRecipe = new EventEmitter<Recipe>();

    private recipes:Recipe[]=[
        new Recipe("A Test",
                   "Test module",
                   "https://images.pexels.com/photos/551997/pexels-photo-551997.jpeg?cs=srgb&dl=appetizer-avocado-bacon-551997.jpg&fm=jpg",
                   [
                       new Ingredent("bread",1),
                       new Ingredent("free",20)
                   ]),
        new Recipe("B Test",
                   "Test module",
                   "https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg?cs=srgb&dl=appetizer-close-up-cucumber-406152.jpg&fm=jpg",
                   [
                       new Ingredent("bean",100),
                       new Ingredent("meet",1) 
                   ])
      ];

    constructor(private slService: ShoppingListService) {
    }

    getRecipes(){
     return this.recipes.slice();
    }
    addIngredentsToShoppingList(ingredents: Ingredent[]){
     this.slService.addIngredents(ingredents);
    }
}