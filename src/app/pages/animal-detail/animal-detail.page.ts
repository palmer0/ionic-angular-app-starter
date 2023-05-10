import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AnimalService} from "../../services/animal.service";
import {Animal} from "../../models/animal.model";

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.page.html',
  styleUrls: ['./animal-detail.page.scss'],
})
export class AnimalDetailPage implements OnInit {

  animal?: Animal;

  constructor(
    private route: ActivatedRoute,
    private animalService: AnimalService,
    //private location: Location
  ) { }

  ngOnInit(): void {
    this.getAnimal();
  }

  getAnimal(): void {
    const id : string | null = this.route.snapshot.paramMap.get('id');
    if (id ) {
      this.animalService.getAnimalById(id).subscribe(
        animal => this.animal = animal
      );
    }
  }

  toggleFavorite(): void {
    if(this.animal){
      //this.animal.favorite = !this.animal.favorite;
      this.animalService.toggleFavorite(this.animal);
    }

  }


}
