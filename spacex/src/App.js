import './App.css';
import {
  ApolloClient, 
  InMemoryCache,
  ApolloProvider, 
  HttpLink, 
  from
} from '@apollo/client';
import {onError} from '@apollo/client/link/error';
import GetRockets from './Components/GetRockets';
import Nav from './Components/Nav'
import Hero from './Components/Hero';
import Rockets from './Components/GetRockets';
import Footer from './Components/Footer';

const errorLink = onError(({graphqlErrors, networkError}) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path}) => {
      console.log(`graphql error ${message}`);
    });
  }
});
const link = from([
  errorLink, 
  new HttpLink({uri: "https://space-x-rockets.herokuapp.com/graphql"})
])

const client = new ApolloClient({
  cache: new InMemoryCache,
  link: link,
})

function App() {
  return <ApolloProvider client={client}>
    {""}
    <Hero />
    <Rockets />
    <Footer />
  </ApolloProvider>
}

export default App;
