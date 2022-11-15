import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Movies from "./components/Movies";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Movies} />
          <Route path="/movie" component={MovieDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
