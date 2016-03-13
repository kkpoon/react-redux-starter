import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return "world";
        },
      },
    },
  }),
});
