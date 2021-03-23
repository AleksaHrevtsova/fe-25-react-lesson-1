import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { Component, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import image from "./assets/images/img1.jpg";
import Loader from "./components/Loader/Loader";

import Header from "./components//Header/Header";
import Navigation from "./components//Navigation/Navigation";

import Main from "./components//Main/Main";
import { Home, About, Contacts } from "./pages";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";

import database from "./db/db.json";
import links from "./db/nav.json";

import routes from "./routes";
// console.log(routes);

import { connect } from "react-redux";
import addUserAction from "./redux/actions/userAction";

class App extends Component {
  state = {
    users: [],
  };
  componentDidMount() {
    const { allUsers } = this.props;
    this.setState({ users: [...allUsers] });
  }
  componentDidUpdate(prevProps, prevState) {
    const { user, allUsers } = this.props;

    if (user !== prevProps.user || allUsers !== prevProps.allUsers) {
      this.setState({ users: [...allUsers] });
    }
  }

  render() {
    return (
      <div className="App">
        <Header className="Header">
          <Navigation links={links} />
        </Header>
        <div>
          {this.state.users.map((user) => {
            return (
              <li key={user.email}>
                {user.pass}{" "}
                <button
                  type="button"
                  onClick={() => this.props.delete(user.email)}
                >
                  del
                </button>
              </li>
            );
          })}
        </div>
        <Main db={database} className="Main">
          {/* <Suspense fallback={<Loader image={image} />}> */}
          <Suspense fallback="Waiting...">
            <Switch>
              {routes.map((route) => {
                // console.log(route);
                return <Route {...route} />;
              })}
              {/* <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contacts" component={Contacts} />
              <Route component={NotFound} />
              <Redirect to="/" /> */}
            </Switch>
          </Suspense>
        </Main>
        <Footer className="Footer" />
      </div>
    );
  }
}
const mapStateToProps = (store) => {
  console.log("store.user", store.user);
  console.log("store.allUsers", store.allUsers);
  return {
    user: store.user,
    allUsers: store.allUsers,
  };
};
const mapDispatchToProps = {
  x: addUserAction.addUser,
  delete: addUserAction.deleteUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
