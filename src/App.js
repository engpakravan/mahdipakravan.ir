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
import Blog from './Components/sections/blog/blogSections'
import Footer from './Components/sections/footer/1LineFooter'

//Import Elements Here
import MoreBtn from './Components/Elements/MoreBtn'

//Import Context Here
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
          <MoreBtn text="دیدن بقیه نمونه کار ها..." link="portfoilo"/>
          <Blog/>
          <MoreBtn text="دیدن بقیه نمونه کار ها..." link="portfoilo"/>
          <Footer text="به انتهای این صفحه رسیدیم :)"/>
        </ThemeContext.Provider>
      </MethodContext.Provider>
      </div>
    );
  }
}

export default App;
