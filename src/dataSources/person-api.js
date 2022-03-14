const { RESTDataSource } = require('apollo-datasource-rest');

class PersonAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://swapi.dev/api';
  }

  getPeopleForHome(page) {
    return this.get(`/people/?page=${page}`);
  }

  getPersonByName(name) {
    return this.get(`/people/?search=${name}`);
  }

  getHomePlanet(planetId) {
    return this.get(`/planets/${planetId}/`);
  }
}

module.exports = PersonAPI;
