import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { Component, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components//Header/Header";
import Navigation from "./components//Navigation/Navigation";

import Main from "./components//Main/Main";
import { Home, About, Contacts } from "./pages";

import Footer from "./components/Footer/Footer";

import database from "./db/db.json";
import links from "./db/nav.json";

import routes from "./routes";
// console.log(routes);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="Header">
          <Navigation links={links} />
        </Header>
        <Main db={database} className="Main">
          <Suspense fallback="Waiting...">
            <Switch>
              {routes.map((route) => {
                console.log(route);
                return (
                  // <Route
                  //   exact={route.exact}
                  //   path={route.path}
                  //   component={route.component}
                  // />
                  <Route {...route} />
                );
              })}
              {/* <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contacts" component={Contacts} /> */}
            </Switch>
          </Suspense>
        </Main>
        <Footer className="Footer" />
      </div>
    );
  }
}

export default App;
