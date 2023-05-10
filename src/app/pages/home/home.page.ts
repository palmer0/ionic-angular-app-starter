import {Component, OnInit} from '@angular/core';
import {Animal} from "../../models/animal.model";
import {AnimalService} from "../../services/animal.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  animals: Animal[] = [];

  constructor(private animalService: AnimalService) { }

  ngOnInit(): void {
    this.getAnimals();
  }

  getAnimals(): void {
    this.animalService.getFavorites()
      .subscribe(animals => {
        this.animals = animals;
        //this.getFavorites();
      });
  }

  toggleFavorite(animal: Animal): void {
    this.animalService.toggleFavorite(animal);

  }

  goToAnimals() {

  }
}
