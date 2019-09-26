import React from 'react';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';
import {
  ThemeProvider as MaterialThemeProvider,
  StylesProvider
} from '@material-ui/styles';
import styled, {
  ThemeProvider as StyledThemeProvider
} from 'styled-components';

import Home from './container/templates/Home';
import './reset.css';
import theme from './config/theme';

const port = (process.env.NODE_ENV = 'production'
  ? `${process.env.PORT}/graphql`
  : 'http://localhost:4000/graphql');

const httpLink = createHttpLink({
  uri: port,
  credentials: 'same-origin'
});

const client = new ApolloClient({
  link: ApolloLink.from([httpLink]),
  cache: new InMemoryCache(),
  onError: e => {
    console.log(e);
  }
});

const App = () => (
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <StylesProvider injectFirst>
        <MaterialThemeProvider theme={theme}>
          <StyledThemeProvider theme={theme}>
            <Home />
          </StyledThemeProvider>
        </MaterialThemeProvider>
      </StylesProvider>
    </ApolloHooksProvider>
  </ApolloProvider>
);

export default App;
