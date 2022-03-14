const resolvers = {
  Query: {
    peopleForHome: (_, { page }, { dataSources }) => {
      return dataSources.personAPI.getPeopleForHome(page);
    },
    personByName: async (_, { name }, { dataSources }) => {
      try {
        const { results } = await dataSources.personAPI.getPersonByName(name);
        if (!results || results.length === 0) return {};
        const person = results[0];
        return {
          name: person.name,
          height: person.height,
          mass: person.mass,
          gender: person.gender,
          homeworld: person.homeworld,
        };
      } catch (error) {
        return {
          code: error.extensions.response.status,
          success: false,
          message: error.extensions.response.body,
          track: null,
        };
      }
    },
  },

  Person: {
    homeworld: ({ homeworld }, _, { dataSources }) => {
      const id = parseInt(homeworld.match(/\/planets\/([0-9]+)/)[1]);
      return dataSources.personAPI.getHomePlanet(id);
    },
  },
};

module.exports = resolvers;
