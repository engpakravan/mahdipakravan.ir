import React from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Vazir.css'
import './App.css';

//Import Router
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//Import Component Here
import Header from './Components/Header/header'
import HowWorking from './Components/sections/howWorking/HowWorkings'
import Skills from './Components/sections/skills/skillsSection'
import Portfoilo from './Components/sections/portfoilo/PortfoiloSection'
import Blog from './Components/sections/blog/blogSections'
import Footer from './Components/sections/footer/1LineFooter'

//Import Elements Here
import MoreBtn from './Components/Elements/MoreBtn'
import MyJumborton from './Components/Elements/MyJumbotron'

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
      <Router>
        <Switch>
        <Route exact path="/">
          <MethodContext.Provider value={{Comp_To_Html : this.Comp_To_Html.bind(this)}}>
            <ThemeContext.Provider value={this.state}>
              <Home/>
            </ThemeContext.Provider>
          </MethodContext.Provider>
        </Route>

        <Route path="/portfoilo">
          <ThemeContext.Provider value={this.state}>
            <PortfoiloSection/>
          </ThemeContext.Provider>
        </Route>

        <Route path="/blog">
          <ThemeContext.Provider value={this.state}>
            <Weblog/>
          </ThemeContext.Provider>
        </Route>
        </Switch>
      </Router>
    );
  }
}

function Home(){
  return(
    <div className="App">
      <Header HeaderJumborton={true} />
        <HowWorking />
        <Skills />
        <Portfoilo type={'section'}/>
        <MoreBtn text="دیدن بقیه نمونه کار ها..." link="portfoilo"/>
        <Blog type={'section'}/>
        <MoreBtn text="دیدن بقیه مطالب ..." link="portfoilo"/>
      <Footer text="به انتهای این صفحه رسیدیم :)"/>
    </div>
  )
}

function Weblog(){
  return(
    <div className="App">
      <Header/>
      <MyJumborton title="به وبلاگ خوش آمدید" desc="تو اینجا یک سری چرت و پرت داریم"/>
      <Blog type={'all'} noTitle={true}/>
      <Footer text="به انتهای صفحه رسیدیم !"/>
    </div>
  )
}

function PortfoiloSection(){
  return(
    <div className="App">
      <Header/>
      <MyJumborton title="نمونه کار ها" desc="این جا هم نمونه کار هاست دیگه"/>
      <Portfoilo  noTitle={true} type={'all'}/>
      <Footer text="به انتهای این صفحه رسیدیم :)"/>
    </div>
  )
}

export default App;
