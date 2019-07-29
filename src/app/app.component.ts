import { Component, OnInit, ɵConsole } from '@angular/core';
import { PokeapiService } from './services/pokeapi.service';
import { forkJoin } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

public pokeresults = {};
  constructor(private pokeapiService: PokeapiService) { }

  ngOnInit() {

const pokedetails = [];
// let poke = [];

for (let i = 1; i < 152; i++) {
  const poke = this.pokeapiService.getPokemon('' + i);
  pokedetails.push(poke);
  console.log(i);
  console.log(pokedetails);
}


// const name = this.PokeapiService.getPokemon()
    // this.PokeapiService.getAllPokemon('20')//.subscribe(
    //   (res)=>{
    //     this.pokeresults = res;
    //   },
    //   (err) =>{
    //     console.log(err);
    //   }
    // );
  }

}
