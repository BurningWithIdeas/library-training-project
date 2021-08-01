import React from "react";
import SearchPage from "./pages/search-page/search-page";
import { Route, Redirect } from "react-router-dom";

function App() {
  return (
    <>
      <Redirect from="/" to="/search" />
      <Route path="/search" component={SearchPage} />
    </>
  );
}

export default App;
