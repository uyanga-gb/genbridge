import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
//   uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT, // Replace with your GraphQL endpoint
  uri: "http://genbridge.world/graphql",
  cache: new InMemoryCache(),
});

export default client;