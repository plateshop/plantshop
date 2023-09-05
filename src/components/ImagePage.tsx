import React from "react";
import { Link } from "react-router-dom";
import png from "../img/logo/main2.png";

const ImagePage = () => {
  return (
    <div>
      <Link to="/Main">
        <img src={png} alt="main2.png" />
      </Link>
    </div>
  );
};

export default ImagePage;