import './App.css';
import { useState } from 'react'; 

function App() {
  return (
    <div className="App">
      <div>
        <div className= "main">
       <img src="main.png"><a href= "/" onClick=function (e) {
e.preventDefalut();
this.props.onChangePage();
}.bind(this)}>{this.props.title}</img>
{this.props.sub}
       </div>
      </div>
    </div>
  );
}

export default App;
