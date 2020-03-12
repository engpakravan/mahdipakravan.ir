import React , {useState} from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Vazir.css'
import './App.css';

//Import ContextHelper

//Import Component Here
import Header from './Components/Header/header'
import HowWorking from './Components/sections/howWorking/HowWorkings'

import {ThemeContext} from './Context/ThemeContext'
class App extends React.Component {
  state = require('./defaultState')

  render(){
    return (
      <div className="App">
        <ThemeContext.Provider value={this.state}>
          <Header/>
          <HowWorking />
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
