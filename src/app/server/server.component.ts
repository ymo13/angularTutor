import { Component } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';

@Component({
  // select: '[app-server]',
  selector: 'app-server',
  templateUrl: './server.component.html', // you can put real html here
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
    hasError = false;
    hasDish = false;
    ingredients1 = ["Egg", "Syrup", "Cheese", "Bread", "Lettuce",
                  "Potato"];
    ingredients2 = ["Ham", "Pancake", "Cereal", "Onion", "Pasta",
    "Meatball"];
    selected = [];
    dish: string;

    recipes = [
      new Recipe("Egg Omelette", ["Egg", "Onion", "Ham",
        "Cheese"].sort()),
      new Recipe("Cheese Burger", ["Bread",
        "Cheese", "Ham"].sort()),
      new Recipe("Pancake", ["Pancake",
        "Syrup"].sort()),
      new Recipe("Meatball Pasta", ["Pasta",
        "Meatball"].sort())];


    selectIngredient(ingredient: string) {
        this.selected.push(ingredient)
    }

    checkRecipe() {
      this.clearError();
      this.clearDish();

      for(let i of this.recipes) {
        if(i.ingredients.length !== this.selected.length)
          continue;

        let sorted = this.selected.sort();

        for(let j = 0; j < this.selected.length; j++) {
          if(sorted[j] !== i.ingredients[j]) {
            break;
          }
          if(j === this.selected.length - 1) {
            this.dish = i.name;
            this.hasDish = true;
          }
        }
      }

      if(!this.hasDish) this.setError();
      this.clearSelected();
    }

    setError() {
      this.hasError = true;
    }

    clearError() {
      this.hasError = false;
    }

    clearDish() {
      this.hasDish = false;
    }

    clearSelected() {
      this.selected = [];
    }

    reset() {
      this.hasError = false;
      this.selected = [];
      this.hasDish = false;
    }
}
