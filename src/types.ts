import PersonAPI from './dataSources/person-api';

export interface DataSources {
  personAPI: PersonAPI;
}

export interface Context {
  dataSources: DataSources;
}
