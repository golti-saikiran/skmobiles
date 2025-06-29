import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient,InMemoryCache, ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import { store } from './components/ReduxFeatures/Store';
import { initializeIcons } from '@fluentui/font-icons-mdl2';


initializeIcons();

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri:"https://skmobiles-backend.onrender.com/",

})
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


