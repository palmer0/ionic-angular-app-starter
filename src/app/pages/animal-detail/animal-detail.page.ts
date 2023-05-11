import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AnimalService} from "../../services/animal.service";
import {Animal} from "../../models/animal.model";
import { DatabaseService } from './../../services/database.service';


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
    private db: DatabaseService,
    //private location: Location
  ) { }

  /* ngOnInit(): void {
    this.getAnimal();
  } */

  ngOnInit() {
    this.db.getDatabaseState().subscribe((dbReady) => {
      if (dbReady) {
        this.getAnimal();
      }
    });
  }

  getAnimal(): void {
    const id : string  = this.route.snapshot.paramMap.get('id');
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
