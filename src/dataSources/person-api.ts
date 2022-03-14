import { RESTDataSource } from 'apollo-datasource-rest';

class PersonAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://swapi.dev/api';
  }

  getPeopleForHome(page: number) {
    return this.get(`/people/?page=${page}`);
  }

  getPersonByName(name: string) {
    return this.get(`/people/?search=${name}`);
  }

  getHomePlanet(planetId: number) {
    return this.get(`/planets/${planetId}/`);
  }
}

export default PersonAPI;
