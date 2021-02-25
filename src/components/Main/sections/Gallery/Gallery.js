import React from "react";
import s from "./Gallery.module.css";
import db from "../../../../db/gallery.json";

const Gallery = () => {
  return (
    <>
      <ul className={s.list}>
        {db.map((el) => (
          <li key={el.id}>
            <img src={el.url} alt={el.alt} />
          </li>
        ))}
      </ul>
    </>
  );
};
export default Gallery;
