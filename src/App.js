import React from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Vazir.css'
import './App.css';

//Import ContextHelper

//Import Component Here
import Header from './Components/Header/header'
import HowWorking from './Components/sections/howWorking/HowWorkings'
import Skills from './Components/sections/skills/skillsSection'
import Portfoilo from './Components/sections/portfoilo/PortfoiloSection'

import ThemeContext from './Context/ThemeContext'
import MethodContext from './Context/MethodsContext'

class App extends React.Component {
  state = require('./defaultState')

  //TODO Get it In The Reducer
  Comp_To_Html(element){
    return <div dangerouslySetInnerHTML={{__html : element}} />
  }
  
  render(){
    return (
      <div className="App">
      <MethodContext.Provider value={{
        Comp_To_Html : this.Comp_To_Html.bind(this)
      }}>
        <ThemeContext.Provider value={this.state}>
          <Header/>
          <HowWorking />
          <Skills />
          <Portfoilo/>
        </ThemeContext.Provider>
      </MethodContext.Provider>
      </div>
    );
  }
}

export default App;
