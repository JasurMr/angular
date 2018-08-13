import { EventEmitter } from "@angular/core";

import { Ingredent } from "../shared/ingredent.module";

export class ShoppingListService{

    ingredentsChanged = new EventEmitter<Ingredent[]>()

    private ingredents:Ingredent[] = [
        new Ingredent("apple",5),
        new Ingredent("tomatoes",10)
      ];

    getInredents(){
        return this.ingredents.slice();
    }
    addIngredent(ingredent:Ingredent){
        this.ingredents.push(ingredent);
        this.ingredentsChanged.emit(this.ingredents.slice());
    }

    addIngredents(ingredents:Ingredent[]){
        this.ingredents.push(...ingredents);
        this.ingredentsChanged.emit(this.ingredents.slice());
    }
}