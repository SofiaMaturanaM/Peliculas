const app = require('../app');
global.fetch = require('node-fetch');

describe('function getDataMovie()', () => {
    test('obtiene la respuesta de una promesa', () => {
        return expect(app.getDataMovie('https://www.omdbapi.com/?apikey=348097f5&s=code&type=movie')).resolves.toBeTruthy();
    });
});