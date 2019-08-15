
import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../../services/pokeapi.service';
import { forkJoin } from 'rxjs';
import { filter } from 'minimatch';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';

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
  public typeSearch = ['water', 'grass'];
  public typeResults = [];

  public filterForm = new FormGroup({
    nameFilter: new FormControl('')
    // typeFilter: new FormControl(false)
  });

  constructor(private pokeapiService: PokeapiService, private fb: FormBuilder) {
  }


  ngOnInit() {
    this.filterForm.valueChanges.subscribe((filterItem) => {
      console.log(filterItem);
      this.onFilter(filterItem);
    });

    console.log(this.filterForm);

    const pokemonObsArr = [];

    for (let i = 1; i < 152; i++) {
      const pokeObs = this.pokeapiService.getPokemon(+i);
      pokemonObsArr.push(pokeObs);
    }

    console.log(pokemonObsArr);
    forkJoin(pokemonObsArr).subscribe((res) => {
      // console.log(res);
      this.pokeresults = res;
      this.pokeRender = [...this.pokeresults];
    }, (err) => {
      console.log(err);
    });
  }

  onFilter(filterItem: any) {

    const results = this.pokeresults.filter((pokemon) => {
      console.log(pokemon);
      const pokeTypes = pokemon.types.map((x) => x.type.name);

      if (pokemon.name.includes(filterItem.nameFilter.toLowerCase())
      // &&pokeTypes.includes('dragon')
      ) {
        return true;
      }
      return false;
    });

    this.pokeRender = [].concat(results);
    console.log(this.pokeRender);
  }
}

