import React from 'react';
import { AppRegistry } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";
import BooksScreen from './components/BooksScreen';
import BookDetailScreen from './components/BookDetailScreen';
import AddBookScreen from './components/AddBookScreen';
import EditBookScreen from './components/EditBookScreen';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';

const MainNavigator = createStackNavigator({
 Book: { screen: BooksScreen },
 BookDetails: { screen: BookDetailScreen },
 AddBook: { screen: AddBookScreen },
 EditBook: { screen: EditBookScreen },
});

const MyRootComponent = createAppContainer(MainNavigator);

const cache = new InMemoryCache();
const client = new ApolloClient({
 cache,
 link: new HttpLink({
    uri: 'http://localhost:3000/graphql',
 }),
});

const App = () => (
 <ApolloProvider client={client}>
  <MyRootComponent />
 </ApolloProvider>
);

AppRegistry.registerComponent('MyApp', () => App);

export default App;