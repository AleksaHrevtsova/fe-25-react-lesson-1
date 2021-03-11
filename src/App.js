import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import axios from "axios";
import React, { Component } from "react";
import Header from "./components//Header/Header";
import Navigation from "./components//Navigation/Navigation";

import Main from "./components//Main/Main";
import Gallery from "./components/Gallery/Gallery";
import Contacts from "./components/Contacts/Contacts";

import Footer from "./components/Footer/Footer";

import database from "./db/db.json";
import links from "./db/nav.json";

import getGalleryItems from "./services/pexelsApi";
const { getFetch } = getGalleryItems;

const style = {
  background: "green",
};

class App extends Component {
  state = {
    query: "moon",
    page: 1,
    formObject: null,
    gallery: [],
  };

  componentDidMount() {
    const { query, page } = this.state;
    getFetch(query, page).then((result) => {
      console.log(result);
      this.setState({ gallery: [...result] });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(`Я обновился`, this.state.query);
    const { query, page } = this.state;

    if (query !== prevState.query) {
      getFetch(query, page)
        .then((result) => {
          console.log(result);
          this.setState((prev) => ({ gallery: [...prev.gallery, ...result] }));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  componentWillUnmount() {
    console.log(`Я пошел спать`);
  }

  getFormObject = (obj) => {
    this.setState({
      formObject: obj,
    });
  };

  getQuery = (query) => {
    console.log(query);
    this.setState({ query });
  };

  render() {
    const { gallery } = this.state;
    const { getQuery } = this;
    return (
      <div className="App">
        <Header>
          <Navigation links={links} />
        </Header>
        <Main db={database}>
          <Gallery gallery={gallery} getQuery={getQuery} />
          {/* <Contacts myProps="Hello" getFormObject={this.getFormObject} /> */}
        </Main>
        <Footer />
      </div>
    );
  }
}

export default App;
