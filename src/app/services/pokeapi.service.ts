import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Pokemon {
}

@Injectable({
  providedIn: 'root'
})
// Declaring the API URL for use in functions.
export class PokeapiService {
  private APIURL: string = 'http://pokeapi.co/api/v2/';
  pokemon$: Pokemon[];

  constructor(private http: HttpClient) { }

  public getPokemon(id: number): Observable<Pokemon> {
    return this.http.get(this.APIURL + 'pokemon/' + id);
  }

  public getPokemonSpecies(id: number): Observable<Pokemon> {
    return this.http.get(this.APIURL + 'pokemon-species/' + id);
  }
}
