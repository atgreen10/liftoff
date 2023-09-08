import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles';
import Pages from './pages';

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:4000',
});

ReactDOM.render(
    <React.StrictMode>
    <ApolloProvider client = {client}>
    <GlobalStyles />
            <Pages />
    </ApolloProvider>  
  </React.StrictMode>,
  document.getElementById('root')
);

