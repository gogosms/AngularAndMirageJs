import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  url = '/api/pokemons';

  counter = 1;

  constructor(private http: HttpClient) {}

  public getAll() {
    return this.http.get<Array<{}>>(this.url);
  }

  public add() {
    this.counter++;
    return this.http.post(this.url, {
      id: 4,
      name: 'Mew',
      type: 'special',
      imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png',
    });
  }
}
