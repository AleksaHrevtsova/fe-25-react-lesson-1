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
import axios from "axios";

import x from "./services/pexelsApi";
const { getFetch } = x;

const style = {
  background: "green",
};

class App extends Component {
  state = {
    query: "moon",
    page: 1,
    formObject: null,
    gallery: [],
    msg: "",
  };

  async componentDidMount() {
    const { query, page } = this.state;
    // ==== ЕСЛИ НЕ ИМПОРТИРОВАТЬ ИЗ ОТДЕЛЬНОГО ФАЙЛА =====
    let key = `563492ad6f917000010000012eb7a26bec714b6cbbd6f346c10047af`;
    axios.defaults.baseURL = `https://api.pexels.com/v1`;
    axios.defaults.headers.common["Authorization"] = key;
    let url = `/search?query=${query}&per_page=6&page=${page}`;
    const response = await axios.get(url);
    const data = await response.data;
    const photos = await data.photos;
    this.setState({ gallery: [...photos] });
    // ==== ЕСЛИ НЕ ИМПОРТИРОВАТЬ ИЗ ОТДЕЛЬНОГО ФАЙЛА =====
    
    // getFetch(query, page).then((result) => {
    //   console.log(result);
    //   this.setState({ gallery: [...result] });
    // });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(`Я обновился`, this.state.query);
    const { query, page } = this.state;

    if (query !== prevState.query) {
      getFetch(query, page)
        .then((result) => {
          console.log(result);
          if (result.length) {
            this.setState((prev) => ({
              gallery: [...prev.gallery, ...result],
            }));
          } else {
            this.setState({ msg: "Nothing to show by your request" });
            alert(this.state.msg);
          }
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
    const { gallery, msg } = this.state;
    const { getQuery } = this;
    return (
      <div className="App">
        <Header>
          <Navigation links={links} />
        </Header>
        <Main db={database}>
          {msg && <p>{msg}</p>}
          <Gallery gallery={gallery} getQuery={getQuery} />
          {/* <Contacts myProps="Hello" getFormObject={this.getFormObject} /> */}
        </Main>
        <Footer />
      </div>
    );
  }
}

export default App;
