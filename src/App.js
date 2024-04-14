import React, { useState } from 'react';
import Navbar from './components/navbar';
import TextForm from './components/Textform';
import Alert from './components/Alert';
import About from './components/about'; // Import the About component

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState()

  const ShowAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
  }
  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.background = '#343a40';
      ShowAlert("Dark mode Has Been Enabled" ,"success")
      document.title = 'Textutils-Dark Mode'
      setInterval(() => {
        document.title ='TextUtils is Amazing Mode';
      }, 2000);
      setInterval(() => {
        document.title ='Install TextUtils is Amazing Mode'
      }, 1500);
    }
    else {
      setmode('light');
      document.body.style.background = 'white';
      ShowAlert("White mode Has Been Enabled" ,"success")
      document.title = 'Texrutils-light Mode'
    }
  }
  // function Alert(props){
  //   const capitalize = (word) =>{
  //       const lower = word.toLowerCase();
  //       return str.charAt(0).toUpperCase() + lower.Slice(1);
  //   }
  // }
  return (
    <>
    <Router>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
      <Alert alert= {alert} />
      <div className="container my-3">
      <Switch>
          <Route path="/about">
            <About />
          </Route>
       <Route path="/">
          <TextForm  ShowAlert={ShowAlert} heading="Enter the text to analyze below" mode={mode} />
          </Route>
        </Switch>
        </div>
      </Router>
    </>
  );
}

