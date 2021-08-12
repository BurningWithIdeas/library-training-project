import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import SearchPage from './pages/search-page/search-page';

function App() {
  return (
    <>
      <Redirect from="/" to="/search" />
      <Route path="/search" component={SearchPage} />
    </>
  );
}

export default App;
