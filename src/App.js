import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Button, Carousel } from "react-bootstrap";

import Header from "./components//Header/Header";
import Navigation from "./components//Navigation/Navigation";
import Main from "./components//Main/Main";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";

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
      <Button variant="success">CLICK</Button>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Header>
        {/* {a < 3 && <Navigation links={links} prop1="prop1" prop2={null} />} */}

        {a < 3 ? (
          <p style={style}>Условие верно</p>
        ) : (
          <Navigation links={links} prop1="prop1" prop2={null} />
        )}
      </Header>
      <Main db={database} a="a" b="b">
        Hello!
        <p>World!</p>
        <p>Bye!</p>
        {/* <Gallery array={gallery} /> */}
      </Main>
      <Footer />
    </div>
  );
};

export default App;
