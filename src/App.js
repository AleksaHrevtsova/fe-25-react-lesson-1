import "./App.css";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";

import database from "./db/db.json";
import gallery from "./db/gallery.json";
import links from "./db/nav.json";
console.log(links);

// console.log("gallery json: ", gallery);
const a = 2;
const App = () => {
  return (
    <div className="App">
      <Header>
        {/* {a < 3 && <Navigation links={links} prop1="prop1" prop2={null} />} */}

        {a < 3 ? (
          <p>Условие верно</p>
        ) : (
          <Navigation links={links} prop1="prop1" prop2={null} />
        )}
      </Header>
      <Main db={database} a="a" b="b">
        Hello!
        <p>World!</p>
        <p>Bye!</p>
        <Gallery array={gallery} />
      </Main>
      <Footer />
    </div>
  );
};

export default App;
