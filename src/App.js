import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './globalStyle';
import Pizzas from "./pages/pizzas";
import Deserts from "./pages/deserts";
import Fullmenu from "./pages/fullmenu";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/pizza"  component={Pizzas} />
          <Route path="/desserts"  component={Deserts} />
          <Route path="/full_menu"  component={Fullmenu} />
      </Switch>
    </Router>
  );
}

export default App;
