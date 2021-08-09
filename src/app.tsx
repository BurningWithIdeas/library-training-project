import React from "react";
import SearchPage from "./pages/search-page/search-page";
import ItemPage from "./pages/item-page/item-page";
import { Route, Redirect } from "react-router-dom";

function App() {
  return (
    <>
      <Route exact path="/">
        <Redirect to="/search" />
      </Route>

      <Route exact path="/search" component={SearchPage} />
      <Route path="/search/:item" component={ItemPage} />
    </>
  );
}

export default App;
