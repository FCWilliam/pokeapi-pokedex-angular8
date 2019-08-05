import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../../services/pokeapi.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  public pokeresults = [];
  public pokeRender = [];

  constructor(private pokeapiService: PokeapiService) { }

  ngOnInit() {

    const pokemonObsArr = [];

    for (let i = 1; i < 151; i++) {
      // If statement inside for loop due to an error with the API. ID 71 was temporarily unavailable.
      //   // if (i === 71) {
      //   //   i++;
      // }
      const pokeObs = this.pokeapiService.getPokemon(+i);
      pokemonObsArr.push(pokeObs);
      console.log(i);
    }



    console.log(pokemonObsArr);
    forkJoin(pokemonObsArr).subscribe((res) => {
      console.log(res);
      this.pokeresults = res;
      this.pokeRender = [...this.pokeresults];
    }, (err) => {
      console.log(err);
    });

  }

  onSearch(event: any) {
    const results = this.pokeresults.filter((pokemon) => {
      if (pokemon.name.includes(event.target.value.toLowerCase())) {
        return true;
      }
      return false;
    });

    this.pokeRender = [].concat(results);
  }

}

