import "./App.css";
import { React, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import { Switch, Route } from "react-router-dom";
import Jobs from "./Components/Jobs/Jobs";
import Contacts from "./Components/Contacts/Contacts";
import SignIn from "./Components/SIgnIn/SignIn";

function App() {
  function useDocumentTitle() {
    useEffect(() => {
      document.title = "Jobs";
    }, []);
  }
  useDocumentTitle();
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/jobs">
          <Jobs />
        </Route>
        <Route exact path="/contactus">
          <Contacts />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
