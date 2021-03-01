import React from "react";
import s from "./Gallery.module.css";
import { v4 as genId } from "uuid";
const Gallery = ({ gallery }) => {
  return (
    <>
      <ul className={s.list}>
        {gallery.map((item) => {
          const { url, alt } = item;
          return (
            <li key={genId()}>
              <img src={url} alt={alt} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default Gallery;
