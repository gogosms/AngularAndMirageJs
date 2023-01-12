import { Server } from 'miragejs';

const pokemons = [
  {
    id: 1,
    name: 'Pikachu',
    type: 'electric',
    imageUrl:
      'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/7/77/latest/20150621181250/Pikachu.png/200px-Pikachu.png',
  },
  {
    id: 2,
    name: 'Charmander',
    type: 'fire',
    imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
  },
  {
    id: 3,
    name: 'Bulbasaur',
    type: 'grass',
    imageUrl: 'https://static.wikia.nocookie.net/espokemon/images/4/43/Bulbasaur.png',
  },
];

export default () => {
  new Server({
    seeds(server) {
      server.db.loadData({
        pokemons,
      });
    },
    routes() {
      this.namespace = '/api';

      this.get('/pokemons', (schema) => schema.db['pokemons']);

      this.post('/pokemons', (schema, request) => {
        const pk = JSON.parse(request.requestBody);
        return schema.db['pokemons'].insert(pk);
      });
    },
  });
};
