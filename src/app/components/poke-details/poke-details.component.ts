import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PokeapiService } from '../../services/pokeapi.service';
import { PokeListComponent } from '../poke-list/poke-list.component';

@Component({
  selector: 'app-poke-details',
  templateUrl: './poke-details.component.html',
  styleUrls: ['./poke-details.component.scss']
})
export class PokeDetailsComponent implements OnInit {

  public pokedetails = null;
  public pokeresults = [];
  public pokeRender = [];


  constructor(
    private route: ActivatedRoute,
    private pokeapiService: PokeapiService,
    private location: Location
  ) { }
  ngOnInit() {

    const id = +this.route.snapshot.paramMap.get('id');
    const pokedetails = this.pokeapiService.getPokemon(id).subscribe((res) => {
      console.log(res);
      this.pokedetails = res;
    }, (err) => {
      console.log(err);
    });

  }
}

