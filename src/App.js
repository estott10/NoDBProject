import React, { Component } from 'react';
import './App.css';

// import axios from 'axios';

import Input from './Components/Input.js';
// import Submit from './Components/Submit.js';
import Weather from './Components/Weather.js';
import Events from './Components/Events.js';


class App extends Component {
  constructor(){
    super();

    this.state= {
      serchedCity: '',
      weatherInfo: {}
    //state
    }
    //binding
  }
  componentDidMount(userCity){
    axios.get(`api.openweathermap.org/data/2.5/weather?q={userCity}`).then(
      results => {
        this.setState( {weatherInfo: results.data}
        )
      }
    )
  }

  //methods(using CRUD)



  render() {


    return (
      <div className="App">
        // <h1> Today's Weather and Events </h1>
        <Input componentDidMountFn= {this.componentDidMount}/>

        <Weather />
        <Events />
      </div>
    );
  }
}

export default App;
