import "../styles/Main.css";
import { useState } from "react";

interface AppProps {
  title: string;
  sub: string;
}

function Main(props: AppProps) {
  const handlePageChange = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <div>
        <div className="main">
          <a href="/" onClick={handlePageChange}>
            <img src="../img/logo/main2.png" alt="Main" />
            {props.title}
          </a>
          {props.sub}
        </div>
      </div>
    </div>
  );
}

export default Main;
