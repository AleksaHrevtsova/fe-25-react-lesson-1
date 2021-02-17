import React from "react";
// import db from "../../db/db.json";

function Main({ db }) {
  console.log(db);
  //   console.log(db);
  //   console.log(a);
  //   console.log(b);
  //   console.log(props.db);
  const { one, two, three } = db;
  return (
    <main>
      <h1>Hello my lovely FE-25</h1>
      <h2>MAin</h2>
      <ul>
        <li>{one}</li>
        <li>{two}</li>
        <li>{three}</li>
      </ul>
    </main>
  );
}
// console.dir(Main);

export default Main;
