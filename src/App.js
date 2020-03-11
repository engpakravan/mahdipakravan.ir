import React from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Vazir.css'
import './App.css';
// import './themify.css'

//Import Component Here
import Header from './Components/Header/header'


function App() {
  return (
    <div className="App">
      <Header HeaderJumborton={true} />
    </div>
  );
}

export default App;
