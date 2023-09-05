import React from "react";
import { Link } from "react-router-dom";

const ImagePage = () => {
  return (
    <div>
      <Link to="/Main">
        <img src="../img/logo/main2.png" alt="main2" />
      </Link>
    </div>
  );
};

export default ImagePage;
