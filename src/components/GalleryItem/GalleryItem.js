import React from "react";

import { withRouter } from "react-router-dom";
// import ImagePage from "../../pages/ImagePage/ImagePage";
import s from "../Gallery/Gallery.module.css";
import PropTypes from "prop-types";

const GalleryItem = ({ el }) => {
  const { src, alt } = el;
  // console.log(el.id);
  return (
    <>
      <div className={s.imgWrapper}>
        <img src={src.tiny} alt={alt} />
      </div>
      <div className={s.imgHover}></div>
    </>
  );
};

// const GalleryItem = ({ el, getElem }) => {
//   const { src, alt } = el;
//   return (
//     <li>
//       <div className={s.imgWrapper}>
//         <img src={src.tiny} alt={alt} />
//       </div>
//       <div className={s.imgHover}>
//         <a
//           href="#"
//           onClick={() => {
//             getElem(el);
//           }}
//         >
//           Click Me!
//         </a>
//       </div>
//     </li>
//   );
// };

export default withRouter(GalleryItem);

GalleryItem.propTypes = {
  el: PropTypes.shape({
    src: PropTypes.shape({
      tiny: PropTypes.string,
    }),
    alt: PropTypes.string,
  }),
  getElem: PropTypes.func,
};
