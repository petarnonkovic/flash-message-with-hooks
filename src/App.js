import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Home from "./containers/Home";
import Messages from "./containers/Messages";

const App = () => {
  return (
    <div className="App">
      <nav className="mainNav">
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/messages">
          Messages
        </Link>
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/messages" component={Messages} />
      </Switch>
    </div>
  );
};

export default App;
