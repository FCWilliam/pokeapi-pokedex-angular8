import { Component, OnInit, } from '@angular/core';
import { PokeapiService } from './services/pokeapi.service';
import { forkJoin } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public pokeresults = [];
  constructor(private pokeapiService: PokeapiService) { }

  ngOnInit() {
  }
}
