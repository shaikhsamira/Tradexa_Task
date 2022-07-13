// import logo from './logo.svg';
import './App.css';
// import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] =useState('light');
  const [alert , setAlert] =useState(null);

  const showAlert=(msg,type)=>{
    setAlert({
      msg:msg,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }  
  

  var styles
  const changeMode=()=>{
    if (mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#102c47';
      document.body.style.color='white';
      showAlert("Dark Mode enabled",'success');

    }
    else{
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      setMode('light');
      showAlert("Light Mode enabled",'success');
    }
  }
  return (
    <div className="black" style={styles}>
     {/* <Router>
     <Navbar title="TextUtil" aboutText="About TextUtils" Mode={mode} func={changeMode}  />
      <Alert alert={alert}/>
      <Routes>
        <Route exact path="/" element={<TextForm showAlert={showAlert}/>} />
        <Route exact path="/about" element={<AboutUs Mode={mode}/>} >
        </Route>
      </Routes>
    </Router> */}
    <Navbar title="TextUtil" aboutText="About TextUtils" Mode={mode} func={changeMode}  />
    <Alert alert={alert}/>
    <TextForm showAlert={showAlert}/>
     {/* <div className="container my-4" >
     </div>  */}
    </div>
  );
}

export default App;
