import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../../services/pokeapi.service';

@Component({
  selector: 'app-poke-man',
  templateUrl: './poke-man.component.html',
  styleUrls: ['./poke-man.component.scss'],
  providers: [ PokeapiService ]
})

export class PokeManComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
