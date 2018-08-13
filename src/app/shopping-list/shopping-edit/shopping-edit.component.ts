import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Ingredent } from '../../shared/ingredent.module';
import { ShoppingListService } from './../shoping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef:ElementRef;
  @ViewChild('amountInput') amountInputRef:ElementRef;
 
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }
  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredent = new Ingredent(ingName, ingAmount);
    this.shoppingListService.addIngredent(newIngredent)
  }
}
