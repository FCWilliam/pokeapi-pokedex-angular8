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
  public pokeSpecies = null;
  public description = '';


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
    });

    const pokeSpecies = this.pokeapiService.getPokemonSpecies(id).subscribe((res) => {
      console.log(res);
      this.pokeSpecies = res;

      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.pokeSpecies.flavor_text_entries.length; i++) {
        if (this.pokeSpecies.flavor_text_entries[i].language.name.includes('en')
        && this.pokeSpecies.flavor_text_entries[i].version.name.includes('firered')) {
          // this.description = this.pokeSpecies.flavor_text_entries[i].flavor_text;
          console.log(this.pokeSpecies.flavor_text_entries[i].flavor_text);
          this.description = this.pokeSpecies.flavor_text_entries[i].flavor_text;
        }
      }


    }
      , (err) => {
        console.log(err);
      });
  }
}

