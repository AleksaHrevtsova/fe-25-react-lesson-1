import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Header from "./components//Header/Header";
import Navigation from "./components//Navigation/Navigation";

import Main from "./components//Main/Main";
import Gallery from "./components/Gallery/Gallery";

import Footer from "./components/Footer/Footer";

import database from "./db/db.json";
import gallery from "./db/gallery.json";
import links from "./db/nav.json";
console.log(links);

const style = {
  background: "green",
};

// console.log("gallery json: ", gallery);
const a = 2;
const App = () => {
  return (
    <div className="App">
      <Header>
        <Navigation links={links} />
      </Header>
      <Main db={database}>
        <Gallery gallery={gallery} />
      </Main>
      <Footer />
    </div>
  );
};

export default App;
