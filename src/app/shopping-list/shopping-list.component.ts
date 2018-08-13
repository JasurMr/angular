import { Component, OnInit } from '@angular/core';

import { Ingredent } from '../shared/ingredent.module';
import { ShoppingListService } from './shoping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredents:Ingredent[];
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredents = this.shoppingListService.getInredents();
    this.shoppingListService.ingredentsChanged
        .subscribe(
          (ingredents:Ingredent[])=>{
            this.ingredents = ingredents;
          }
        )
  }
}
