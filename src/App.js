import React from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Spinner , Alert} from 'react-bootstrap'
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

  get_spinner(){
    return (
      <div className="mt-5 d-flex justify-content-center align-items-center flex-column customSpinner">
          <h6>در حال دریافت از سرور</h6>
          <p>فعلا از بقیه وبسایت استفاده کنید اینم الان میاد !</p>
          <br/>
          <Spinner animation="grow" />
      </div>
    )
  }

  errorComponent(){
    return (
      <div className="w-100 d-flex justify-content-center align-items-start pt-4">
        <Alert key={`Error_${Math.random()}`} variant={'danger'}>
          <Spinner animation="grow" />
          <h6 className="pr-3">هنگام دریافت اطلاعات مشکلی پیش آمده</h6>
        </Alert>  
      </div>
    )
  }

  get_spinner_w100(){
    return (
        <div className="w-100 d-flex justify-content-center align-items-start pt-4">
          <Spinner animation="grow" />
          <h6 className="pr-3">در حال دریافت اطلاعات...</h6>
        </div>
      )
  }
  
  render(){
    return (
      <MethodContext.Provider value={{
        Comp_To_Html : this.Comp_To_Html.bind(this) , 
        get_spinner : this.get_spinner.bind(this) ,
        get_spinner_w100 : this.get_spinner_w100.bind(this) ,
        errorComponent : this.errorComponent.bind(this) ,
      }}>
      <Router>
        <Switch>
        <Route exact path="/">
            <ThemeContext.Provider value={this.state}>
              <Home/>
            </ThemeContext.Provider>
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
      </MethodContext.Provider>
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
