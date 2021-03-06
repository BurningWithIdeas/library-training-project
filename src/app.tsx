import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import SearchForm from 'Common/search-form';
import SearchPage from './pages/search-page/search-page';
import ItemPage from './pages/item-page/item-page';

function App() {
  return (
    <>
      <Route exact path="/">
        <Redirect to="/search" />
      </Route>

      <SearchForm />

      <Route exact path="/search" component={SearchPage} />
      <Route path="/search/:item" component={ItemPage} />
    </>
  );
}

export default App;
