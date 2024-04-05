import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import CountryData from "./components/Country";

function App() {
  let client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: `https://countries.trevorblades.com/`,
    }),
  });
  return (
    <>
      <ApolloProvider client={client}>
        <CountryData />
      </ApolloProvider>
    </>
  );
}

export default App;