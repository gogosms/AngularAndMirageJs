import { Component, OnInit } from '@angular/core';
import { PokemonsService } from './services/pokemons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-mirageJs';
  pokemons: any[] = [];

  constructor(private pokemonsService: PokemonsService) {}

  ngOnInit(): void {
    this.pokemonsService.getAll().subscribe((p) => {
      this.pokemons = p;
    });
  }

  add() {
    this.pokemonsService.add().subscribe((p) => {
      console.log('Agregando Mew');
      this.ngOnInit();
    });
  }
}
