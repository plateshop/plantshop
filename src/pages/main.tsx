import './App.css';
import { useState } from 'react';
// import { useHistory } from 'react-router-dom';


// function App() {
//   return (
//     <div className="App">
//       <div>
//         <div className= "main">
//        <img src="main.png"><a href= "/" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
//   e.preventDefault();
// this.props.onChangePage();
// }.bind(this)>{this.props.title}</img>
// {this.props.sub}
//        </div>
//       </div>
//     </div>
//   );
// }
interface AppProps {
  title: string;
  sub: string;
}

function App(props: AppProps) {
  const handlePageChange = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // 페이지 변경 로직을 작성해주세요.
  };

  return (
    <div className="App">
      <div>
        <div className="main">
          <a href="/" onClick={handlePageChange}>
            <img src="main.png" alt="Main" />
            {props.title}
          </a>
          {props.sub}
        </div>
      </div>
    </div>
  );
}


export default App;
