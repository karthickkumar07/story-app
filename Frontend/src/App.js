import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Auth from "./components/Auth";
import Home from "./components/Home";
import Profile from "./components/Profile";
import { UserContext } from "../src/context/UseContext";
import AuthorProfile from "./components/AuthorProfile";
function App() {
  const [user, setUser] = useState({
    googleId: "",
    displayName: "",
    firstName: "",
    lastName: "",
    image: "",
  });
  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <Switch>
          <Route exact path="/" component={Auth} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/yourkavidhai" component={Profile} />
          <Route exact path="/kavidhai/author" component={AuthorProfile} />
        </Switch>
      </UserContext.Provider>
    </Router>
  );
}
export default App;
