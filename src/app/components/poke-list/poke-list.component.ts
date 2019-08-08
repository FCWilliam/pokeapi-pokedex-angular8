import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../../services/pokeapi.service';
import { forkJoin } from 'rxjs';
import { filter } from 'minimatch';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  public pokeresults = [];
  public pokeRender = [];
  public pokeType = ['bug', 'dragon', 'ice', 'fighting', 'fire', 'flying', 'grass',
    'ghost', 'ground', 'electric', 'normal', 'poison', 'psychic', 'rock', 'water'];

  constructor(private pokeapiService: PokeapiService) { }

  ngOnInit() {

    const pokemonObsArr = [];

    for (let i = 1; i < 152; i++) {
      // If statement inside for loop due to an error with the API. ID 71 was temporarily unavailable.
      //   // if (i === 71) {
      //   //   i++;
      // }
      const pokeObs = this.pokeapiService.getPokemon(+i);
      pokemonObsArr.push(pokeObs);
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

  getType() {
    const results: any = this.pokeresults.filter((pokemon) => {
      const typeResults = [];
      for (let i = 0; i < pokemon.types.length; i++) {
        typeResults.push(pokemon.types[i].type.name);
      }
      console.log(typeResults);
    });

  }
  onSearch(event: any) {

    const results = this.pokeresults.filter((pokemon) => {
      console.log(pokemon);
      if (pokemon.name.includes(event.target.value.toLowerCase())) {
        return true;
      }
      return false;
    });

    this.pokeRender = [].concat(results);
  }


  // onFilterChange(event: any) {
  //   const results = this.pokeresults.filter((pokemon) => {
  //     if (pokemon.types.length === 2) {
  //       if (pokemon.types[0].type.name.includes(event.target.value)
  //       || pokemon.types[1].type.name.includes(event.target.value) ) {
  //         return true;
  //       }
  //       return false;
  //     }
  //     this.pokeRender = [].concat(results);
  //   });
  // }
}

