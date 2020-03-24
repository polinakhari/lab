import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/layouts/Header"
import Form from "./components/form/Form";
import Home from "./components/pages/Home";
import State from "./context/State";
import AlertState from "./context/alertContext/alertState";
import Recomendations from "./components/recomendations/Recomendations";
import Alert from "./components/layouts/Alert";
import NotFound from "./components/pages/NotFound";
import Choice from "./components/pages/Choice"

class App extends Component {
  render() {
    return (
      <AlertState>
        <State>
          <div className="App">
            <div className="container">
              <Header/>
              <Alert />
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/page">
                  <Form type="page"/>
                </Route>
                <Route exact path="/domain">
                  <Form type="domain"/>
                </Route>
                <Route exact path="/site">
                  <Form type="site"/>
                </Route>
                <Route exact path="/feedback">
                  <Form type="feedback"/>
                </Route>
                <Route exact path="/communication">
                  <Form type="communication"/>
                </Route>
                <Route exact path="/domainrecomendations">
                  <Recomendations type="domain" />
                </Route>
                <Route exact path="/pagerecomendations">
                  <Recomendations type="page" />
                </Route>
                <Route exact path="/sitenrecomendations">
                  <Recomendations type="site" />
                </Route>
                <Route exact path="/feedbackrecomendations">
                  <Recomendations type="feedback" />
                </Route>
                <Route exact path="/communicationrecomendations">
                  <Recomendations type="communacation" />
                </Route>
                <Route exact path="/foundrecomendations">
                  <Recomendations type="search" />
                </Route>
                <Route exact path="/recomendations">
                  <Choice/>
                </Route>
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </State>
      </AlertState>
    );
  }
}
export default App;
