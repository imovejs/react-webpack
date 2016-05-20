import React, { Component } from 'react';
import {
  HelloReact
} from '../components/';

import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
//var Img =require('../images/user.jpg');


import  user from '../images/user.jpg';

class App extends Component {
  render(){
    return (
      <div className="text-center">
          <div>
            <img src={user} alt="" />
            <img src="http://i.gtimg.cn/music/photo/mid_album_150/T/E/001Z85KZ1vKXTE.jpg" alt="" />
            <div id="space-invader"></div>

            <HelloReact />  
          </div>
      </div>
    );
  }
}

export default App;