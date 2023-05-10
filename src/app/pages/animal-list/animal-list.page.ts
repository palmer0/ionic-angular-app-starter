import { Component, OnInit } from '@angular/core';
import {Animal} from "../../models/animal.model";
import {AnimalService} from "../../services/animal.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.page.html',
  styleUrls: ['./animal-list.page.scss'],
})
export class AnimalListPage implements OnInit {

  animals: Animal[] = [];
  //favorites: Animal[] = [];
  //private animals$: Observable<Animal[]>;

  constructor(private animalService: AnimalService) { }

  ngOnInit(): void {
    this.getAnimals();
    //this.animals$ = this.animalService.getAllAnimals();
  }

  getAnimals(): void {
    this.animalService.getAllAnimals()
      .subscribe(animals => {
        this.animals = animals;
        //this.getFavorites();
      });
  }

  /*getFavorites(): void {
    this.animalService.getFavorites()
      .subscribe(favorites => this.favorites = favorites);
  }*/

  /*isFavorite(animal: Animal): boolean {
    return this.favorites.some(favorite => favorite.id === animal.id);
  }*/

  toggleFavorite(animal: Animal): void {
    this.animalService.toggleFavorite(animal);

    /*
    if (this.isFavorite(animal)) {
      this.animalService.removeFromFavorites(animal);
    } else {
      this.animalService.addToFavorites(animal);
    }
    this.getFavorites();
    */
  }


}
