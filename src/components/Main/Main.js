import React from "react";
import Gallery from "./sections/Gallery/Gallery";
import db from "../../db/db.json";

function Main({ db, a, b, children }) {
  console.log("a", a);
  console.log("b", b);
  console.log("children", children);
  // console.log(children.props);
  // console.log(children.props.children);

  const { one, two, three } = db;
  return (
    <main>
      <h1>Hello my lovely FE-25</h1>
      <h2>MAin</h2>
      {children}
      <ul>
        <li>{one}</li>
        <li>{two}</li>
        <li>{three}</li>
      </ul>
      <Gallery />
    </main>
  );
}
console.dir(Main);

export default Main;

Main.defaultProps = {
  a: "A",
  b: "Boooooooooooooo",
};
